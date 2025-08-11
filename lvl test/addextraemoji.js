const Discord = require("discord.js")
const {  ApplicationCommandOptionType } = require("discord.js");
const messages = require("../utils/message");
const ms = require("ms")
const {  PermissionsBitField } = require('discord.js');
module.exports = {
    name: 'addextraemoji',
    description: ' add emoji from your Pc or mobile to your server',

  options: [
   
    {
      name: 'emoji',
      description: 'Invite of the server you want to add as giveaway joining requirement',
      type: ApplicationCommandOptionType.Attachment,
      required: false
    },
    {
      name: 'name',
      description: 'Role you want to add as giveaway joining requirement',
      type: ApplicationCommandOptionType.String,
      required: false
    },
  ],

  run: async (client, interaction) => {

    // If the member doesn't have enough permissions
if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Giveaways"))
 { return interaction.reply({content : " <:1059649999086030938:1060645619292721225>  You dont have permissions (Manage messages) Or you dont have role that named (Giveaways)", ephemeral: true}) }

    const emoji = interaction.options.getChannel('emoji');
    const name = interaction.options.getString('name')
    
    
    await interaction.reply({content : `**Loading your emoji to be added .... **`})
   
const oo = await interaction.guild.emojis.create({attachment : `${emoji.attachment}` , name : `${name}`}).catch(err => {
    setTimeout(() => {
        console.log(err)
        return interaction.editRely({content : `${err.rawError.message}`})
    }, 2000);

})

setTimeout(() => {
    if (!oo) return ;

    const embed = new EmbedBuilder()
    .setColor('Random')
    .setDescription(`**Your emoji has been added ${oo}**`)
    interaction.editRely({content : `` , embeds : [embed]})
}, 3000);
  }

};
