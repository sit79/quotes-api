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
  deleteQuote
} = require("../controllers/quote")
// routes:

const apiRoutes = {
  getQuote: "/:id",
  addQuote: "/",
  getAllQuotes: "/",
  updateQuote: "/:id",
  deleteQuote: "/:id"
}

// GET
router.get(apiRoutes.getQuote, getQuote)
router.get(apiRoutes.getAllQuotes, getAllQuotes)

// POST
router.post(apiRoutes.addQuote, addQuote)
// PUT
router.put(apiRoutes.updateQuote, updateQuote)
// DELETE
router.delete(apiRoutes.deleteQuote, deleteQuote)

router.use(sendJsonResp)
router.use(apiErrorMiddleware)
module.exports = router
