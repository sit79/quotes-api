const Quote = require("../models/quote")

module.exports = {
  getQuote: (req, res, next) => {
    console.log("get quote")
    next()
  },
  addQuote: (req, res, next) => {
    console.log("add quote")
    next()
  },
  getAllQuotes: (req, res, next) => {
    Quote.find({})
      .then(quotes => {
        res.locals.response = Object.assign({}, res.locals.response || {}, {
          quotes
        })
      })
      .catch(err => {
        err.statusCode = 404
        next(err)
      })
      .finally(() => next())
  },
  updateQuote: (req, res, next) => {
    const { id } = req.params
    const update = req.body
    Quote.findOneAndUpdate({ _id: id }, update, { new: true })
      .then(quote => {
        res.locals.response = Object.assign({}, res.locals.response || {}, {
          quote,
          message: `Successfully updated quote with id: ${id}`
        })
      })
      .catch(err => next(err)) // needs better handling
      .finally(() => next())
  },

  deleteQuote: (req, res, next) => {
    console.log("delete quote")
    next()
  },

  getRandomQuote: async (req, res, next) => {
    try {
      const random = await Quote.aggregate([
        { $sample: { size: 1 } },
        { $project: { quote: 1, _id: 0, author: 1 } }
      ])
      res.locals.response = Object.assign({}, res.locals.response || {}, {
        random
      })
    } catch (e) {
      next(err)
    }
    next()
  }
}
