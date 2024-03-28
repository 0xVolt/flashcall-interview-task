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

// Create the login route
app.post('/login', (request, response) => {
    const { email, password } = request.body

    // First check if the user exists then check password
    UserModel.findOne({ email: email })
    .then(user => {
        if (user) {
            if (user.password === password) {
                response.json('Success! Logged in.')
            } else {
                response.json('Password incorrect!')
            }
        } else {
            response.json('No record of user.')
        }
    })
})

// Create the register route
app.post('/register', (request, response) => {
    UserModel.create(request.body)
    .then(users => response.json(users))
    .catch(err => response.json(err))
})

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running. Listening on port number 3001...')
})