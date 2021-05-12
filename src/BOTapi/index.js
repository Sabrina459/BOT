const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');
const timerBotFunc = require('./checking-birthday')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

const START = async () => {
    try {
        const dbURL = process.env.dbURL

        await mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false, tls: true })
            .then(() => {
                console.log('Database Connected')
            })
            .catch(error => console.log(error));

        app.listen(PORT, () => {
            console.log('server was started on http://localhost:5000')
            timerBotFunc()
        })
    } catch (error) {
        console.log(error)
    }
}

START()
