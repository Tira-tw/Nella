const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "clearqueue",
    description: "清除歌曲列表",
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("目前沒有播放音樂!").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`現在沒有播放`).catch(() => null);
        }
        // no new songs (and no current)
        queue.tracks = [ queue.tracks[0] ];
        // skip the track
        
        return interaction.reply(`已成功清除`).catch(() => null);
    },
};