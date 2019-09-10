const Model = require("./model")

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessage(filterUser) {
    // return list;
    let filter = {}

    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateMessage(id, message) {
    const foundMessage = await Model.findById(id);

    foundMessage.message = message
    const newMessage = await foundMessage.save()

    return newMessage
}

function remove(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateMessage,
    remove
}