const createMainBot = require('./index.js');
const createKickBot = require('./kickBot.js');
const createBanBot = require('./banBot.js');
const mongoose = require('mongoose');

const token = require('./models/tokennts.js');
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_BANS", "GUILD_INVITES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"]
});

async function start() {
    const allTokens = await token.find({});
    allTokens.forEach((guildToken) => {
        guildToken.botTokens.forEach(async (botToken) => {
            let activatedBot = createKickBot(botToken);
            await activatedBot.connect();
        });
    });
}
start();
//https://discord.gg/CM9bGr5hAT