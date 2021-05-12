import {Schema, model, ObjectId} from 'mongoose'

const Chat = new Schema({
    chatId: {type: String},
    users: [{type: ObjectId, ref: 'user'}]
})

export default model('Chat', Chat)
