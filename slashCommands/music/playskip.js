const { getVoiceConnection } = require("@discordjs/voice");
const { default: YouTube } = require('youtube-sr');

module.exports = {
    name: "playskip",
    description: "播放歌曲列表其中一首歌直接跳過目前的歌",
    options: [
        {
            name: "歌曲列表名稱",
            description: "只限歌曲列表的歌!",
            type: "STRING",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        const { channel } = interaction.member.voice; // get the voice channel
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`目前沒有播放音樂!`).catch(() => null);
        }
        // no new songs (and no current)
        if(!queue.tracks || queue.tracks.length <= 1) { 
            return interaction.reply(`現在沒有播放`).catch(() => null);
        }
        const track = args.join(" ");
        if(!args[0]) return interaction.reply(`請填入歌曲列表的歌!`).catch(() => null);
        // Regexpressions for testing the search string
        const youtubRegex = /^(https?:\/\/)?(www\.)?(m\.|music\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
        const playlistRegex = /^.*(list=)([^#\&\?]*).*/gi;
        const songRegex = /^.*(watch\?v=)([^#\&\?]*).*/gi;
        // variables for song, and playlist
        let song = null;
        let playlist = null;
        // Use the regex expressions
        const isYT = youtubRegex.exec(track);
        const isSong = songRegex.exec(track);
        const isList = playlistRegex.exec(track)
            
        try {
            // try to play the requested song
            await interaction.reply(`搜尋**${track}**歌曲中...*`).catch(() => null);
            // get song from the link
            if(isYT && isSong && !isList) {
                song = await YouTube.getVideo(track); 
            }
            // get playlist from the link
            else if(isYT && !isSong && isList) {
                playlist = await YouTube.getPlaylist(track).then(playlist => playlist.fetch());
            }
            // get playlist & song from the link
            else if(isYT && isSong && isList) {
                song = await YouTube.getVideo(`https://www.youtube.com/watch?v=${isSong[2]}`); 
                playlist = await YouTube.getPlaylist(`https://www.youtube.com/playlist?list=${isList[2]}`).then(playlist => playlist.fetch());
            }
            // otherwise search for it
            else {
                song = await YouTube.searchOne(track); 
            }
            if(!song && !playlist) return interaction.editReply(`搜尋失敗 ${track} , 請確定歌曲名稱 or 連接是否正確`);
            /* FOR NO PLAYLIST REQUESTS */
            if(!playlist) {
                // Add the song to the queue
                queue.tracks = [queue.tracks[0], client.createSong(song, interaction.user), ...queue.tracks.slice(1)]
                // skip the track
                oldConnection.state.subscription.player.stop();
                // edit the loading interaction     
                return interaction.editReply(`現在進行播放中!\n\n歌曲名稱: **__${song.title}__**\n\n總時間 : \`${song.durationFormatted}\``).catch(() => null);
            } 
            /* FOR PLAYLIST REQUEST */
            else {
                // get the song, or the first playlist song
                song = song ? song : playlist.videos[0];
                const playlistSongs = []
                // Add the playlist songs to the queue
                playlist.videos.slice(1).forEach(song => playlistSongs.push(client.createSong(song, interaction.user)))
                queue.tracks = [queue.tracks[0], client.createSong(song, interaction.user), ...playlistSongs, ...queue.tracks.slice(1)]
                // skip the track
                oldConnection.state.subscription.player.stop();
                // edit the loading interaction                    
                return interaction.editReply(`現在進行播放中!\n\n歌曲名稱: **__${song.title}__**\n\n總時間 : \`${song.durationFormatted}\`\n> 添加 \`${playlist.videos.length - 1}首歌\` 來自歌曲列表:**\n> __**${playlist.title}**__`).catch(() => null);
            }

        } catch (e){ console.error(e);
            return interaction.reply(`無法播放音樂\n原因 : \`\`\`${e.interaction || e}`.substr(0, 1950) + `\`\`\``).catch(() => null);
        }
    },
};