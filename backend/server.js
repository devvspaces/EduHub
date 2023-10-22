require("dotenv").config(); // This loads the environment variables from .env

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 8080; // 8080 port is usually available in windows, linux, or macOS.
const app = express();

const connectToDatabase = require("./utils/db.js");

const db = connectToDatabase();

// using express.json() middleware to parse request having header application/json.
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


// enabling cors as middleware to allow requests from frontend only

app.use(cors({
    origin: process.env.FRONTEND_URL.replace(/"/g, ""),
    credentials: true
}));


app.get("/", (req, res) => {
    return res.json({data: "hello world"});
})

app.use("/api/auth", require("./routes/users"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
