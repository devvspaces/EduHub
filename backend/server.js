require('dotenv').config(); // This loads the environment variables from .env

const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require("body-parser")

const connectToDatabase = require('./utils/db.js');

const port = process.env.PORT || 3000
const db = connectToDatabase();

//  Middlewares
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors({
  origin: process.env.FRONTEND_URL.replace(/"/g, ""),
  credentials: true
}));


app.use("/api/auth", require("./routes/user"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})