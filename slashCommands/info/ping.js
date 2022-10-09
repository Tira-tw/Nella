
module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "查看延遲",
    run: async (client, interaction, args) => {
        interaction.reply({
            content: `📶API搜尋的結果: ${client.ws.ping}ms`,
            ephemeral: true
        }).catch(() => null);
    },
};