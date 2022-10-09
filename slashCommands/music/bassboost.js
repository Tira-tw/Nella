const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "bassboost",
    args: ["bass", "bb"],
    description: "更改音樂的低音增強等級",
    options: [
        {
            name: "等級",
            description: "0~20",
            type: "INTEGER",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("目前沒有播放音樂!")
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`現在沒有播放`);
        }
        if(args[0] === undefined || isNaN(args[0]) || Number(args[0]) < 0 || Number(args[0]) > 20) return interaction.reply(`未提供bassboost等級!`).catch(() => null);
        const bassboost = Number(args[0]);
        queue.effects.bassboost = bassboost;

        // change the Basslevel
        queue.filtersChanged = true;
        const curPos = oldConnection.state.subscription.player.state.resource.playbackDuration;
        oldConnection.state.subscription.player.stop();
        oldConnection.state.subscription.player.play(client.getResource(queue, queue.tracks[0].id, curPos));
    
        return interaction.reply(`**已設定為\`${bassboost}等bassboost\`**`).catch(() => null);
    },
};