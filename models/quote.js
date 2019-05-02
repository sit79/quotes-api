const mongoose = require("mongoose")
const { Schema } = mongoose

const QuoteSchema = new Schema({
  quote: {
    type: String,
    default: "",
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Date
  },
  tag: [
    {
      type: String,
      maxlength: 50
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Quote = mongoose.model("Bookmark", QuoteSchema)
module.exports = Quote
