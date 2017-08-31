//ping.js
const Discord = require('discord.js');
var exports = module.exports = {};

exports.run = function(message, pingms) {
    message.reply("The bots ping is " + pingms + "ms");
};
