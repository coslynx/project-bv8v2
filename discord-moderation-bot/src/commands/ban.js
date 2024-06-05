const { Client, Message, Permissions } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    usage: '<user> [reason]',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    execute: async (client, message, args) => {
        if (!message.member.hasPermission(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.reply('You do not have permission to use this command.');
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('You need to mention a user to ban.');
        }

        const member = message.guild.members.cache.get(user.id);
        if (!member) {
            return message.reply('That user is not in this server.');
        }

        if (!member.bannable) {
            return message.reply('I cannot ban that user.');
        }

        let reason = args.slice(1).join(' ');
        if (!reason) {
            reason = 'No reason provided';
        }

        await member.ban({ reason: reason });

        message.channel.send(`${user.tag} has been banned by ${message.author.tag} for ${reason}.`);
    },
};