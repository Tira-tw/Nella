const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "join",
    description: "讓機器人加入語音頻道",
    run: async (client, interaction, args, prefix) => {
        try {
            if(!interaction.member.voice.channelId) return interaction.reply({content: "請先加入語音頻道再使用"}).catch(() => null);
            
            const oldConnection = getVoiceConnection(interaction.guild.id);
            if(oldConnection) return interaction.reply({ content: `早已連線到<#${oldConnection.joinConfig.channelId}>!`}).catch(() => null);
            
            await client.joinVoiceChannel(interaction.member.voice.channel);
            interaction.reply({content: "**已加入**"}).catch(() => null);
        } catch(e) { 
            console.error(e);
            interaction.reply({content: `無法加入語音頻道\n原因 : \`\`\`${e.interaction || e}`.substring(0, 1950) + `\`\`\``}).catch(() => null);
        }
    },
};