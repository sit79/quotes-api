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
    default: "Anonymous"
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

const Quote = mongoose.model("Quote", QuoteSchema)
module.exports = Quote
