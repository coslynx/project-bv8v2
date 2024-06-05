const Discord = require('discord.js');

module.exports = {
  name: 'warn',
  description: 'Warn a user for violating server rules',
  execute(message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.reply('You do not have permission to warn users');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('You need to mention a user to warn');
    }

    const reason = args.slice(1).join(' ');
    if (!reason) {
      return message.reply('You need to provide a reason for the warning');
    }

    const guild = message.guild;
    const member = guild.member(user);
    if (member) {
      const warningEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Warning')
        .setDescription(`You have been warned in ${guild.name}`)
        .addField('Reason', reason)
        .setTimestamp();

      user.send(warningEmbed).catch(console.error);
      message.channel.send(`${user} has been warned for: ${reason}`);
    } else {
      message.reply('That user is not in this server');
    }
  },
};