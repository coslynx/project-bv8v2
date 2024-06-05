scheduledMessages.js

const schedule = require('node-schedule');

function sendScheduledMessage(client, channelId, message, date) {
    const job = schedule.scheduleJob(date, function() {
        client.channels.cache.get(channelId).send(message);
    });
}

module.exports = {
    sendScheduledMessage
};