const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "speed",
    description: "調整速度",
    options: [
        {
            name: "速度",
            description: "50 ~ 300 (100 = 正常)",
            type: "INTEGER",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "請先加入語音頻道再使用"}).catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply({ ephemeral: true, content: "未加入任何一個語音頻道"})
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply({ ephemeral: true, content: "請在相同語音頻道內使用 , 因為我們不同頻道"}).catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply({ ephemeral: true, content: `目前沒有播放音樂!`});
        }
        if(args[0] === undefined || isNaN(args[0]) || Number(args[0]) < 50 || Number(args[0]) > 300) return interaction.reply({ ephemeral: true, content: `請填入正確速度!`}).catch(() => null);
        const speed = Number(args[0]);
        queue.effects.speed = Math.floor(speed) / 100;

        // change the Basslevel
        queue.filtersChanged = true;
        const curPos = oldConnection.state.subscription.player.state.resource.playbackDuration;
        oldConnection.state.subscription.player.stop();
        oldConnection.state.subscription.player.play(client.getResource(queue, queue.tracks[0].id, curPos));
    
        return interaction.reply({ ephemeral: false, content: `已成功調整\`${Math.floor(speed) / 100}倍\` \n原始速度 :\n(${speed}%)**`}).catch(() => null);
    },
};