const express = require('express')
const path = require('path')
const app = express()
const port = 3000 || process.env.PORT
const controll = require('./src/resources/controller/AutoController')

const handlebars = require('express-handlebars')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'src', 'resources', 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/login', controll.autoll)

app.listen(port, ()=> console.log("Start server success"))