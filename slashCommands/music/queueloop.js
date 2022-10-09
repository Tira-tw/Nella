const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "queueloop",
    description: "重複播放歌曲列表",
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("未加入任何語音頻道").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`現在沒有播放`).catch(() => null);
        }
        if(queue.trackloop) queue.trackloop = false

        // no new songs (and no current)
        queue.queueloop = !queue.queueloop
        // skip the track
        
        return interaction.reply(`已啟用重複播放歌曲列表功能 :\n \`${queue.queueloop ? "啟用" : "禁用"}\``).catch(() => null);
    },
};