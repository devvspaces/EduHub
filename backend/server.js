require('dotenv').config(); // This loads the environment variables from .env

const express = require('express')
const app = express()
const port = 3000
const connectToDatabase = require('./utils/db.js');
const cors = require('cors');

const db = connectToDatabase();

//  Middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})