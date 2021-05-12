const {Schema, model, ObjectId} = require('mongoose')


const User = new Schema({
    userId: {type: String},
    birthdayDate: {type: String},
    parent: {type: ObjectId, ref: 'Chat'},
    name: {type: String},
    chatId: {type: String},
})

module.exports = model('User', User)
