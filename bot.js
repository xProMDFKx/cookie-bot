const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';

client.on('ready', () => {
    console.log('I am ready!');
  }
});

client.on('message', message => {
    if (message.content === '/serverinfo') {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor(`ff0000`)
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
  }
});

client.on('message', message => {
    if (message.content === '/help') {
    	message.reply('pong');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
