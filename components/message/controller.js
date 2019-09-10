const store = require("./store");

function addMessage(user, message) {

    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error("No hay usuario o mensaje")

            reject('Datos incorrectos')
            return false
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        }

        store.add(fullMessage)

        resolve(fullMessage)
    })

}

function getMessages(filterMessages) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterMessages))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject("Invalid Data!")
            return false
        }

        const result = await store.update(id, message)

        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Id invalido")
            return false
        }

        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}