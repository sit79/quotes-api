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
  category: [
    {
      type: String,
      maxlength: 50
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  votes: {
    upVote: Number,
    downVote: Number
  }
})

const Quote = mongoose.model("Bookmark", QuoteSchema)
module.exports = Quote
