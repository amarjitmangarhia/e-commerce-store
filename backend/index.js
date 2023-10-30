const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.resolve(__dirname, '../client/build')));

const port = 3001;

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.listen(port, () => {
    console.log("running on: ", port)
})