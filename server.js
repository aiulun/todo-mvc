const express = require('express')
const app = express()
const connectDB = require('./config/database')
// Go into the routes folder and look for the home file
const homeRoutes = require('./routes/home')
// Go into the routes folder and look for the todos file
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// On root route we're going to reference the homeRoutes variable from line 4
app.use('/', homeRoutes)
// On todos route we're going to reference the todoRoutes variable from line 6
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    