require('dotenv').config()
const { SERVER_PORT, SESSION_SECRET } = process.env
const session = require('express-session')
const express = require('express')
const cors = require('cors')

const ctrl = require(`./controller`)

const app = express()


app.use(express.json())
app.use(cors())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 72
    }
}))


app.post(`/auth/register`, ctrl.register)













app.listen(SERVER_PORT, () => {console.log(`running on ${SERVER_PORT}`)})