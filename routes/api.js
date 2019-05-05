const express = require("express")
const router = express.Router()
const { sendJsonResp } = require("../helpers/helper")
const { apiErrorMiddleware } = require("../middleware/api")

//controllers:
const {
  getQuote,
  addQuote,
  getAllQuotes,
  updateQuote,
  deleteQuote,
  getRandomQuote
} = require("../controllers/quote")
// routes:

const apiRoutes = {
  getQuote: "/quotes/:id",
  addQuote: "/quotes",
  getAllQuotes: "/quotes",
  updateQuote: "/quotes/:id",
  deleteQuote: "/quotes/:id",
  randomQuote: "/quotes/random"
}

// Show all endpoints at home route ("/"")
router.get("/", (req, res) => {
  res.json({ availableRoutes: apiRoutes })
})

// GET
router.get(apiRoutes.getQuote, getQuote)
router.get(apiRoutes.getAllQuotes, getAllQuotes)
router.get(apiRoutes.randomQuote, getRandomQuote)

// POST
router.post(apiRoutes.addQuote, addQuote)
// PUT
router.put(apiRoutes.updateQuote, updateQuote)
// DELETE
router.delete(apiRoutes.deleteQuote, deleteQuote)

router.use(sendJsonResp)
router.use(apiErrorMiddleware)
module.exports = router
