const config = require("./config.json");
const prefix = config.prefix;
const Discord = require("discord.js");
const fs = require('fs');
const createKickBot = require('./kickBot.js');
const createbanBot = require('./banBot.js');
const token = require('./models/tokennts.js');
const { MessageAttachment } = require('discord.js');
const { MessageEmbed, permissionOverwrites, ChannelType, Permissions, MessageButton, MessageActionRow } = require("discord.js");
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_BANS", "GUILD_INVITES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"]
});

// Require the ban bot module and pass the Client class
// const banBot = require('./banBot')(Client, ''); ////////// 

client.on('ready', () => {
  console.log('Bot is online!');
});
const mongoose = require("mongoose");
const db = require("./models/shop");
const user_db = require("./models/user");
const toto = require("./models/steck");
const tokens = require("./models/tokens");
const setSlash = require("./slash");
const axios = require("axios");
const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'ar'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  objectNotation: true
});


mongoose.connect("mongo"); //حط المونجو دب حقكك


console.log('Connected to MongoDB');
client.on("ready", async () => {
  console.log(client.user.tag);
  await setSlash(client);
});

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});

process.on("unhandledRejection", error => {
  return console.log(error)
});




var _0x2c3f = [
  "\x6F\x6E\x63\x65",
  "\x72\x65\x61\x64\x79",
  "\x6C\x6F\x67",
  "\xE2\x9C\x85\x20\x4C\x6F\x67\x67\x65\x64\x20\x69\x6E\x20\x61\x73\x20",
  "\x75\x73\x65\x72",
  "\x74\x61\x67",
  "\x73\x65\x74\x50\x72\x65\x73\x65\x6E\x63\x65",
  "\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73",
  "\x6E\x61\x6D\x65",
  "\x62\x79\x20\x2E\x78\x36\x77",
  "\x74\x79\x70\x65",
  "\x50\x4C\x41\x59\x49\x4E\x47",
  "\x73\x74\x61\x74\x75\x73",
  "\x6F\x6E\x6C\x69\x6E\x65",
  "\x74\x79\x20\x66\x6F\x72\x20\x75\x73\x69\x6E\x67\x20\x41\x68\x6D\x65\x64\x20\x64\x53\x20\x42\x6F\x74\x73\x21"
];




/////////////////////////////   
/// https://discord.gg/CM9bGr5hAT

const too = require('./models/tokennts.js');

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  if (message.content.startsWith('88cre')) {
    const args = message.content.split(' ');
    const token = args[1];

    if (!token) {
      return message.reply({ content: 'Please provide a token. Example: `88cre <token>`' });
    }

    let data = await too.findOne({ guildId: message.guild.id });

    if (!data) {
      data = await too.create({
        guildId: message.guild.id,
        botTokens: [token]
      });
    } else {
      if (!data.botTokens.includes(token)) {
        data.botTokens.push(token);
        await data.save();
      }
    }

    return message.reply({ content: `Token saved successfully! ✅` });
  }
});

/// https://discord.gg/CM9bGr5hAT

client.login("token"); //توكن بوتك