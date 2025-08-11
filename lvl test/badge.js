const {SlashCommandBuilder , EmbedBuilder  } = require ('@discordjs/builders')
const { PermissionsBitField } = require('discord.js');
module.exports = {
data : new  SlashCommandBuilder ()
.setName('badges')
.setDescription('create an automod rule to protect your server from profanity and slurs')
.addUserOption(option => option.setName('user').setDescription('user').setRequired(true)),


async execute (interaction , client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: " <:1059649999086030938:1060645619292721225>  You dont have permissions (Manage messages) Or you dont have role that named (Deletes)", ephemeral: true }) }
const { options } = interaction ;

const user = options.getUser('user')
const member =await  interaction.guild.members.cache.get(user.id)
       
let flags = user.flags.toArray();

let badges = [];

let extrabadges = [] ;

await Promise.all(flags.map(async badge => {

    if (badge === 'Staff') badges.push (``)
    if (badge === 'Partner') badges.push (``)
    if (badge === 'CertifiedModerator') badges.push (``)
    if (badge === 'Hypesquad') badges.push (``)
    if (badge === 'HypeSquadOnlineHouse1') badges.push (``)
    if (badge === 'HypeSquadOnlineHouse2') badges.push (``)
    if (badge === 'HypeSquadOnlineHouse3') badges.push (``)
    if (badge === 'BugHunterLevel1') badges.push (``)
    if (badge === 'BugHunterLevel2') badges.push (``)
    if (badge === 'ActiveDeveloper') badges.push (``)
    if (badge === 'VerifiedDeveloper') badges.push (``)
    if (badge === 'PremiumEarlySupporter') badges.push (``)
    if (badge === 'VerifiedBot') badges.push (``)





}))

const userData = await fetch(`htttps://japi.rest/discord/v1/user/${user.id}`)
const {data} = await userData.join();
if (data.public_flags_array) {
    await Promise.all(data.public_flags_array.map (async badge => {
        if(badge === `NITRO`) badges.push ('')
    }))
}






    }


}