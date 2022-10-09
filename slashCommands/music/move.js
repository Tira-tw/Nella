const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "move",
    description: "移動歌曲列表排隊號碼",
    options: [
        {
            name: "原本",
            description: "原本的號碼",
            type: "INTEGER",
            required: true,
        },
        {
            name: "移動",
            description: "移動幾個",
            type: "INTEGER",
            required: true,
        },
    ],
    run: async (client, interaction, args, prefix) => {
        if(!interaction.member.voice.channelId) return interaction.reply("請先加入語音頻道再使用").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(interaction.guild.id);
        if(!oldConnection) return interaction.reply("未加入任何一個語音頻道").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != interaction.member.voice.channelId) return interaction.reply("請在相同語音頻道內使用 , 因為我們不同頻道").catch(() => null);
        
        const queue = client.queues.get(interaction.guild.id); // get the queue
        if(!queue) { 
            return interaction.reply(`目前沒有播放音樂!`).catch(() => null);
        }
        if(!args[0] || isNaN(args[0]) || Number(args[0]) < 1 || !args[1] || isNaN(args[1]) || Number(args[1]) < 1)
            return interaction.reply(`請填入正確的號碼!`).catch(() => null);
        
        queue.tracks = arrayMove(queue.tracks, args[0], args[1])
        
        return interaction.reply(`已成功移動!\n\n原本排隊號碼 :\`${client.queuePos(args[0])}\` \n移動到 : \`${client.queuePos(args[1])}\``).catch(() => null);
    },
};



function arrayMove(array, from, to) {
    try {
      array = [...array];
      const startIndex = from < 0 ? array.length + from : from;
      if (startIndex >= 0 && startIndex < array.length) {
        const endIndex = to < 0 ? array.length + to : to;
        const [item] = array.splice(from, 1);
        array.splice(endIndex, 0, item);
      }
      return array;
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
    }
  }