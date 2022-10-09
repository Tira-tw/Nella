const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "pause",
    description: "暫停",
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用");
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("未加入任何語音頻道").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`現在沒有播放`).catch(() => null);
        }
        // if already paused
        if(queue.paused) return interaction.reply(`早已暫停...`).catch(() => null);
        
        queue.paused = true;
        
        // skip the track
        oldConnection.state.subscription.player.pause();
        
        return interaction.reply(`已成功暫停!`).catch(() => null);
    },
};