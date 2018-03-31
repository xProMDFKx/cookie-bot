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
//SFSA
    if (message.content === '/help1') { // creates a command *help
        var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
            .setTitle("**List of Commands**\n") // sets the title to List of Commands
            .addField(" - help", "Displays this message (Correct usage: *help)") // sets the first field to explain the command *help
            .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
            .addField(" - ping", "Tests your ping (Correct usage: *ping)") // sets the second field to explain the command *ping
            .addField(" - cookie", "Sends a cookie to the desired player! :cookie: (Correct usage: *cookie @username)") // sets the third field to explain the command *cookie
            .addField(" - 8ball", "Answers to all of your questions! (Correct usage: *8ball [question])") // sets the field to the 8ball command
            .setColor(0xFF8B00) // sets the color of the embed box to orange
            .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
        var embedhelpadmin = new Discord.RichEmbed() // sets a embed box to the var embedhelpadmin
            .setTitle("**List of Admin Commands**\n") // sets the title
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: *mute @username [reason])") // sets a field
            .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])") //sets a field
            .setColor(0xFF8B00) // sets a color
            .setFooter("Ooo, an admin!") // sets the footer
        message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
        if(message.member.roles.some(r=>["Administrator"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
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
