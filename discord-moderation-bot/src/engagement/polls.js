const Discord = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'Create a poll for user engagement',
    execute(message, args) {
        if (!args[0]) {
            return message.channel.send('Please provide a question for the poll');
        }

        const question = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Poll')
            .setDescription(question)
            .setFooter('React to vote');

        message.channel.send(embed).then(sentMessage => {
            sentMessage.react('👍');
            sentMessage.react('👎');
        });
    }
};