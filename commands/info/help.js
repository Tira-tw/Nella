const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`查看指令`)
            .addFields(client.commands.map(d => {
                return {
                    name: `指令百科`,
                    value: `> **__https://nella.cf/__**`,
                    inline: true,
                }
            }))
        ]}).catch(() => null);
    },
};