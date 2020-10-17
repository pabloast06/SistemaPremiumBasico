const Discord = require('discord.js');
const config = require("../config.json");
let premiumsids = config.premiums;

module.exports = {
    info: {
        name: "ejemplo",
        description: "test",
        usage: "test",
        aliases: ['t']
    },

    run: async function(client, message, args){
        if(!premiumsids.includes(message.author.id)) return message.channel.send('Solo Premium');


        message.channel.send("test")
    }
}