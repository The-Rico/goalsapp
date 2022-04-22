const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const {
    errorHandler
} = require('./middleware/errorMiddleware')

//Import MongoDB via the db file in config
connectDB()

//Set express for the app
const app = express()


app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//Set routes for each url
app.use("/api/goals", require('./routes/goalRoutes'))
app.use("/api/users", require('./routes/userRoutes'))

//Use error handler
app.use(errorHandler)


//Set the port via the ENV file, else use 5000
app.listen(port, () => console.log(`Server started on port ${port}`))