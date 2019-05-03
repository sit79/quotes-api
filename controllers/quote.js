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
    console.log("update quote")
    next()
  },
  deleteQuote: (req, res, next) => {
    console.log("delete quote")
    next()
  }
}
