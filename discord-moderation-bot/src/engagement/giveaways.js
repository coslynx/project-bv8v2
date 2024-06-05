const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (message.content === '!giveaway') {
        startGiveaway(message);
    }
});

function startGiveaway(message) {
    message.channel.send('React to this message to enter the giveaway!');
    
    const filter = (reaction, user) => {
        return reaction.emoji.name === '🎉' && !user.bot;
    };
    
    message.awaitReactions(filter, { time: 60000, errors: ['time'] })
        .then(collected => {
            const winner = collected.first().users.cache.filter(user => !user.bot).random();
            message.channel.send(`Congratulations ${winner}! You won the giveaway! 🎉`);
        })
        .catch(() => {
            message.channel.send('No one reacted to the giveaway message. Giveaway ended.');
        });
}

client.login('YOUR_DISCORD_BOT_TOKEN');