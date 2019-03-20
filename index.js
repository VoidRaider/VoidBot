const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const prefix = 'v!' //Set the prefix.
var ping = require("./ping.js");
var say = require("./say.js")
var fs = require('fs');

bot.on('ready', () => {
    console.log('Voidbot is ready. Prefix is ' + prefix);
    bot.user.setGame("test")
});


bot.on('message', (message,) =>{
    const args = message.content.slice('2').trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    //Message Spy Command Start
    var messagespy = message.createdAt +  ' ' + message.author + ' ' + message.content
    console.log(message.createdAt +  ' ' + message.author + ' ' + message.content)
    fs.appendFile('log.txt', messagespy + "\n", function (err) {
        if (err) throw err;
        console.log('Message Logged.');
      });
    //Message Spy Command End
    
    //Say Command Start
    if(command == 'say') {
        say.run(message, args, command);
    }
    //Say Command End (Continues In say.js)

    //Ping Command Start
    if(command == 'ping') {
        pingms = bot.ping;
        ping.run(message, pingms);
    }
    //Ping Command End (Continues in ping.js)

    if(message.content == 'what is the prefix') {
        message.reply('The current prefix is: ' + prefix);
    }

    if (/^<@!?336575331571859456>$/.test(message.content)) {
        message.channel.send(`Prefix is: ${prefix}`);
    } 
    
    });

bot.login(token);
