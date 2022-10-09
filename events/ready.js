module.exports = (client) => {
    client.user.setActivity('n!help / 有斜線指令喔', {type: 'LISTENING'})
    console.log(`${client.getTime()} :: Logged in as ${client.user.tag}!`);
}