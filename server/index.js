const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Transfer data from frontend to backend in JSON format
app.use(express.json)
app.use(cors())

// Create MongoDB connection
mongoose.connect('')