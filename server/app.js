const express = require('express')
const env = require('dotenv')
env.config()
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const mongoose = require('mongoose')


// mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@sandbox-hhbxz.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })

mongoose.connect('mongodb://localhost:27017/mini-wp', { useNewUrlParser:true })

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const userRoutes = require('./routes/user')
const articleRoutes = require('./routes/article')

//for user
app.use("/users", userRoutes)
app.use("/articles", articleRoutes)



app.listen(port, () => console.log("listening on port" + port))