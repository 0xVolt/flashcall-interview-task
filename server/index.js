const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const UserModel = require('./models/User')

const app = express()

// Transfer data from frontend to backend in JSON format
app.use(express.json())
app.use(cors())

// Create MongoDB connection to the user database
mongoose.connect('mongodb://127.0.0.1:27017/user')

// Create the register route
app.post('/register', (request, result) => {
    UserModel.create(request.body)
    .then(users => result.json(users))
    .catch(err => result.json(err))
})

app.listen(3001, () => {
    console.log('Server is running. Listening on port number 3001...')
})