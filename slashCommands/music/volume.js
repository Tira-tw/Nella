const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "volume",
    description: "調整音量",
    options: [
        {
            name: "音量",
            description: "請填入音量",
            type: "INTEGER",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("未加入任何語音頻道")
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`現在沒有播放`);
        }
        if(!args[0] || isNaN(args[0]) || Number(args[0]) < 1 || Number(args[0]) > 150) return interaction.reply(`請填入正確的音量!\n最低 : \n0%\n最高 : \n150%`).catch(() => null);
        const volume = Number(args[0]);
        queue.volume = volume;

        // change the volume
        oldConnection.state.subscription.player.state.resource.volume.setVolume(volume / 100);
        
        return interaction.reply(`已成功調整\`${volume}%\``).catch(() => null);
    },
};