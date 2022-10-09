const { getVoiceConnection } = require("@discordjs/voice");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "queue",
    description: "查看歌曲列表",
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("未加入任何語音頻道").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue || !queue.tracks || !queue.tracks[0]) { 
            return interaction.reply(`目前沒有播放音樂!`).catch(() => null);
        }
        const e2n = s => s ? "✅ 啟用" : "❌ 禁用" 
        const song = queue.tracks[0];
        const queueEmbed = new MessageEmbed().setColor("FUCHSIA")
            .setTitle(`歌曲列表的前15首`)
            .setDescription(`**目前播放:** \`0th)\` \`${song.durationFormatted}\` - [${song.title}](${client.getYTLink(song.id)}) - ${song.requester}`)
            .addField("**重複播放 :**", `> ${e2n(queue.trackloop)}`, true)
            .addField("**歌曲重複播放 :**", `> ${e2n(queue.queueloop)}`, true)
            .addField("**自動播放 :**", `> ${e2n(queue.autoplay)}`, true)
            .addFields(
                queue.tracks.slice(1).slice(0, 15).map((track, index) => {
                    return {
                        name: `\`${client.queuePos(index + 1)})\` - \`${track.durationFormatted}\``,
                        value: `> [${track.title}](${client.getYTLink(track.id)}) - ${track.requester}`,
                        inline: true
                    }
                })
            )
        return interaction.reply({content: `目前有${queue.tracks.length - 1}首歌在歌曲列表`, embeds: [queueEmbed]}).catch(() => null);
    },
};