const Discord = require ("discord.js")
const client = new Discord.Client() 

client.once("ready", () => {
  console.log(`[STATUS] ${client.user.tag} is now online!`)
});

/* Client when detects a new member join */
client.on("guildMemberAdd", async member => {
  let channel = member.guild.channels.cache.find(c => c.name === '🤗welcome')
  let WELCOME = new Discord.MessageEmbed()
  .setTitle('New Member Has Joined!')
  .setDescription(`Welcome ${member.user} To The DutchIS Discord Server!`)
  .setColor('BLUE')
  .setThumbnail(member.user.avatarURL())
  .setTimestamp()
  .setFooter('DutchIS')
  console.log(member.user.avatarURL())
  channel.send(WELCOME)
})

client.login("BOTTOKENHERE"); // Bot Token