import {Schema, model, ObjectId} from 'mongoose'


const User = new Schema({
    userId: {type: String},
    birthdayDate: {type: String},
    parent: {type: ObjectId, ref: 'Chat'},
    name: {type: String},
    chatId: {type: String}
})

export default model('User', User)

