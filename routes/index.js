const router = require('express').Router()
const Food = require('../models/Food')

router.get('/',(req,res)=>{
  Food.find()
  .then(foods =>{
    res.render('index', { foods })
  })
  .catch(err => {
    res.render('index', err)
  })
  
})

router.get('/crearComida',(req,res)=>{
  const food1 = {
    name:'Tacos de tripa sin lavar',
    price: 10,
    taste: 'Hmmmm 🤭'
  }
  Food.create(food1)
    .then(food => {
      res.send(food)
    })
    .catch(err=>{
      res.send(err)
    })
})

module.exports = router