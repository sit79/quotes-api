const Quote = require("./models/quote")
const faker = require("faker")
const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost/quotes", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Mongo")
  })
  .catch(err => {
    console.error("Could not connect, ", err)
  })

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function() {
  // We're connected
  console.log("DB started…")
})

let n = 20
let quotes = []
while (n) {
  quotes.push({
    quote: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    createdAt: Date.now()
  })
  n--
}

Quote.insertMany(quotes, (err, data) => {
  if (err) return console.error(err)
  mongoose.connection.close()
})
