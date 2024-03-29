const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require("./routes/routes")

const db = require("./database")

const app = express();
app.use(cors());


const PORT = process.env.PORT || 3000;      

db.on("error", (error) => {
    console.log("error")
})

db.once("connected", () => {
    console.log("Database Connected!")
})

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '../build')));



app.use("/", routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
