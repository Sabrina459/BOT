const {Schema, model, ObjectId} = require('mongoose')

const Chat = new Schema({
    chatId: {type: String},
    users: [{type: ObjectId, ref: 'User'}]
})

module.exports = model('Chat', Chat)
