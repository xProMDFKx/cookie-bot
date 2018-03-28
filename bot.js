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
    	message.reply('pong');
      embed.setColor(0xFF8B00)
      message.channel.sendEmbed(embed)
    }
});
 
client.login(process.env.BOT_TOKEN);
