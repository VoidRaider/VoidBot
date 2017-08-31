//say.js
const Discord = require('discord.js');
var exports = module.exports = {};

exports.run = function(message, args, command) {
    if(message.author == '<@193784171632525314>') {
        if(command == 'say'){
            message.delete(1000);
        }
        message.channel.send(args)
    } else {
        message.reply('You do not have permission!')
    }
}
