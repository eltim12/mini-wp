const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const userRoutes = require('./routes/user')
const articleRoutes = require('./routes/article')

//for user
app.use("/users", userRoutes)
app.use("/articles", articleRoutes)



app.listen(port, () => console.log("listening on port" + port))  