//1.
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

//2.
mongoose.connect('mongodb://localhost/likeapro', { userNewUrlParser: true }, err=>{
  if (err) return console.log('Hubo un error', err)
  return console.log('Connected to the DB')
})
const app = express()

//3.
app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', path.join(`${__dirname}/views`))


//4. Rutas
const index = require('./routes/index')
app.use('/', index)

app.listen(3000, ()=>{
  console.log('Running on port http://localhost:3000')}
)