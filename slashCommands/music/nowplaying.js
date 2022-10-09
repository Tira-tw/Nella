const { getVoiceConnection } = require("@discordjs/voice");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "nowplaying",
    description: "查看目前播放歌曲狀態",
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("目前沒有播放音樂!").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("👎 **We are not in the same Voice-Channel**!").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue || !queue.tracks || !queue.tracks[0]) { 
            return interaction.reply(`現在沒有播放`).catch(() => null);
        }
        const song = queue.tracks[0];
        const curPos = oldConnection.state.subscription.player.state.resource.playbackDuration;
        
        const songEmbed = new MessageEmbed().setColor("FUCHSIA")
            .setTitle(`${song.title}`)
            .setURL(client.getYTLink(song.id))
            .addField(`**頻道 :**`, `> ${song ? `[${song.channel.name}](${song.channel.url})` : `\`搜尋未結果\``}`, true)
            .addField(`**發布日期 :**`, `> ${song.uploadedAt}`, true)
            .addField(`**使用者 :**`, `> ${song.requester} \`${song.requester.tag}\``, true)
            .addField(`**進度條 :**`, `> ${client.createBar(song.duration, curPos)}\n> **${client.formatDuration(curPos)} / ${song.durationFormatted}**`)
        if(song?.thumbnail?.url) songEmbed.setImage(`${song?.thumbnail?.url}`);

        return interaction.reply({content: `**歌曲狀態**`, embeds: [songEmbed]}).catch(() => null);
    },
};