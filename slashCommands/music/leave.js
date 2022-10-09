const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "leave",
    description: "讓機器人離開語音頻道",
    run: async (client, interaction, args, prefix) => {
        try {
            if(!interaction.member.voice.channelId) return interaction.reply({content: "請先加入語音頻道再使用"}).catch(() => null);
            
            const oldConnection = getVoiceConnection(interaction.guild.id);
            if(!oldConnection) return interaction.reply({content: "未加入任何一個語音頻道"}).catch(() => null);
            if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply({content: "請在相同語音頻道內使用 , 因為我們不同頻道"}).catch(() => null);
        
            await client.leaveVoiceChannel(interaction.member.voice.channel);
            
            interaction.reply({content: "已離開!"}).catch(() => null);
        } catch(e) { 
            console.error(e);
            interaction.reply({content: `無法加入語音頻道\n原因 : \`\`\`${e.interaction || e}`.substring(0, 1950) + `\`\`\``}).catch(() => null);
        }
    },
};