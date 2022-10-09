const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "forward",
    description: "加秒數",
    options: [
        {
            name: "幾秒",
            description: "請填入需求的秒數",
            type: "INTEGER",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        try {
            if(!interaction.member.voice.channelId) return interaction.reply({content: "請先加入語音頻道再使用"}).catch(() => null);
            
            const oldConnection = getVoiceConnection(interaction.guild.id);
            if(!oldConnection) return interaction.reply({content: "目前沒有播放音樂!"}).catch(() => null);
            if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply({content: "請在相同語音頻道內使用 , 因為我們不同頻道"}).catch(() => null);
            
            const queue = client.queues.get(interaction.guild.id); // get the queue
            if(!queue || !queue.tracks || !queue.tracks[0]) { 
                return interaction.reply(`現在沒有播放`).catch(() => null);
            }
            
            const curPos = oldConnection.state.subscription.player.state.resource.playbackDuration;
        
            if(!args[0] || isNaN(args[0])) return interaction.reply({ content: `請填入需求的秒數!!!`}).catch(() => null);
            
            if(Number(args[0]) < 0 || Number(args[0]) > Math.floor((queue.tracks[0].duration - curPos) / 1000 - 1))
            return interaction.reply({ content: `只限於 \`0\` ~ \`${Math.floor((queue.tracks[0].duration - curPos) / 1000 - 1)}\`!**`}).catch(() => null);
            
            const newPos = curPos + Number(args[0]) * 1000;
            // set Filterschanged to true
            queue.filtersChanged = true;
            // seek
            oldConnection.state.subscription.player.stop();
            oldConnection.state.subscription.player.play(client.getResource(queue, queue.tracks[0].id, newPos));
            
            interaction.reply({content: `已成功加\`${args[0]}s\`秒 \n現在 : \`${client.formatDuration(newPos)}\`**!`}).catch(() => null);
        } catch(e) { 
            console.error(e);
            interaction.reply({content: `無法加入語音頻道\n原因 : \`\`\`${e.interaction || e}`.substring(0, 1950) + `\`\`\``}).catch(() => null);
        }
    },
};