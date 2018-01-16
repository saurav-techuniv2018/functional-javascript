function getShortMessages(messages) {
    let shortMessages = messages
        .map(function (messageObject) { return messageObject.message })
        .filter(function (message) { return message.length < 50; });
    return shortMessages;
}

module.exports = getShortMessages;