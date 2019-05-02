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
    console.log("get all quotes")
    next()
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
