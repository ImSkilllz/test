

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () => {
    bot.guilds.forEach(guild => {
        console.log(guild.name)
    });
});




bot.login("NDg2MTIzNTA5MTYxMDAwOTYw.DvGNOA.3tJ-kPW87Jwuz5U5mORQcQCgTDs");
