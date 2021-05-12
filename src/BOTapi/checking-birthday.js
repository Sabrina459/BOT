const {Telegraf} = require('telegraf')
const Chat = require('./models/Chat')
const mongoose = require("mongoose");


const bot = new Telegraf(process.env.BOT_TOKEN)

//'dd-mm-yyyy'
const getCurrentDate = () => {
    const date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let year = date.getFullYear()
    if (month.toString().length === 1) {
        month = '0' + month
    }
    if (day.toString().length === 1) {
        day = '0' + day
    }
    return `${day}-${month}`
}
const sendMessagesEveryDay = async () => {
    const chats = await Chat.find().populate({path: 'users'})
    for (let chatIndex = 0; chatIndex < chats.length; chatIndex++) {
        const chat = chats[chatIndex]
        // console.log(chat.users)
        const currentDate = getCurrentDate()
        chat.users.forEach((user) => {
            if (user.birthdayDate.slice(0,5) === currentDate) {
                try {
                    bot.telegram.sendMessage(user.chatId, `Сегодня др у ${user.name}, ${user.userId}, поздравляем`)
                } catch (error) {
                    console.log(error)
                }
            }
        })

    }
}

const timerBotFunc = () => {
    const timer = setInterval(sendMessagesEveryDay, 8640000000)
    console.log('timer was set')
}
//8640000000
module.exports = timerBotFunc
