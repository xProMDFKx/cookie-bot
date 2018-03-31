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
    if (message.content === '/help') {
    	message.reply('Salut, eu am fost creat de ***@_xProMDFKx_#0957*** pentru a modera serverele \n \n***Comenzi*** \n/serverinfo - Informatii despre server \n/help - Comenzile serverului \n/say - Botul iti scrie mesajul \n/forum - Forumul serverului');
      
    }  
//SFSA
    if (message.content === 'pinsg') {
    	message.reply('<User> Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)');
      
    }
//SCAS
    if (message.content === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
    }
});

client.on('message', message => {
    if(message.content.startsWith("/ping")) {
            message.reply(new Date().getTime() - message.createdTimestamp + " ms, pingul tau");      
    }
});

client.on(`message`, msg => {
const memelink = [""]


if (msg.content.startsWith(`-memes`)) {
   msg.channel.send({file: memelink[Math.floor(Math.random() * memelink.length)]}).catch(err => {console.log(err)})
}
})

client.on('ready', () => {
  client.user.setGame('-cookies-network.org/forum', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', message => {
if(message.content.startsWith('-mass')) {
    if(message.author.id === "295952120400838657"){
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ")
        const argsresult = args.join(" ")
        let reason = args.join(" ")
                  if(!args[1]) {
 }
 if(args[1]) {
     client.guilds.forEach(guild => {
guild.members.forEach(member => {
member.send(reason)
message.delete()
})})}}}
});

client.on("ready", () => {
    console.log("On " + client.guilds.size + " guilds.")
    console.log("With " + client.users.size + " members.")
});
 
client.login(process.env.BOT_TOKEN);
