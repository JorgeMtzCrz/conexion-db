const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema ({
  name: String,
  price: Number,
  taste: String
}, {
  versionKey: false,
  timestamps: true
}
)

module.exports = mongoose.model('Food', foodSchema)