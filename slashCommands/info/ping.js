
module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "ę„ēå»¶é²",
    run: async (client, interaction, args) => {
        interaction.reply({
            content: `š¶APIęå°ēēµę: ${client.ws.ping}ms`,
            ephemeral: true
        }).catch(() => null);
    },
};