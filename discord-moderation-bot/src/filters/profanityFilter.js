const profanityFilter = (message) => {
    const profaneWords = ['profane1', 'profane2', 'profane3']; // Add more profane words as needed

    const filteredMessage = message.content.split(' ').map(word => {
        if (profaneWords.includes(word.toLowerCase())) {
            return '*'.repeat(word.length);
        }
        return word;
    }).join(' ');

    if (filteredMessage !== message.content) {
        message.delete();
        message.channel.send(`${message.author}, please refrain from using inappropriate language.`);
    }

    return filteredMessage;
};

module.exports = profanityFilter;