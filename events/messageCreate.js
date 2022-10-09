const { MessageEmbed } = require("discord.js");
module.exports = async (client, message) => {
    // Slash Command Handling
    if (message.author.bot || !message.guild) return 
    
    let { prefix } = client.config;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return 
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const [ cmdName, ...args ] = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    if (args.length === 0){
        if(matchedPrefix.includes(client.user.id))
          return message.reply({embeds: [new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`查看指令: \`${prefix}help\` / \`/help\`**`)
          ]}).catch(() => null);
      }
    const cmd = client.commands.get(cmdName.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmdName.toLowerCase()));

    if (!cmd) return;
    try {
        cmd.run(client, message, args, prefix);
    } catch (e){
        console.error(e);
        message.channel.send(`運行時出了點問題 ${cmd.name} Command`).catch(() => null);
    }
    
}


function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}