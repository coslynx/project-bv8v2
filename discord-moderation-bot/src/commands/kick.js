const kick = (message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        message.channel.send("You do not have permission to kick members.");
        return;
    }

    const member = message.mentions.members.first();
    if (!member) {
        message.channel.send("Please mention a valid member of this server");
        return;
    }

    if (!member.kickable) {
        message.channel.send("This member cannot be kicked.");
        return;
    }

    member.kick()
        .then(() => message.channel.send(`${member.user.tag} was kicked.`))
        .catch(error => message.channel.send(`An error occurred: ${error}`));
};

module.exports = {
    name: 'kick',
    description: 'Kick a member from the server',
    execute(message, args) {
        kick(message, args);
    },
};