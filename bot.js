const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.RichEmbed()
const prefix = "/"
client.on('message', message => {
  let args = message.content.split(" ").slice(1);

//SAY
  if(message.content.startsWith(prefix + "say"))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xFF8B00)
    message.channel.sendEmbed(embed);
 
}
//SERVERINFO
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor(0xFF8B00)
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
  
}
//SCA
    if (message.content === 'ping') {
    	message.reply('Salut, eu am fost creat de ***@_xProMDFKx_#0957*** pentru a modera serverele \n \n***Comenzi*** \n/serverinfo - Informatii despre server \n/help - Comenzile serverului \n/say - Botul iti scrie mesajul \n/forum - Forumul serverului');
  	}
});

 if(args[1]) {
     client.guilds.forEach(guild => {
guild.members.forEach(member => {
member.send(reason)
message.delete()
});

client.on("ready", () => {
    console.log("On " + client.guilds.size + " guilds.")
    console.log("With " + client.users.size + " members.")
});
 
client.login(process.env.BOT_TOKEN);
