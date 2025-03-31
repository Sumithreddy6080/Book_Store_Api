require("dotenv").config();

const express = require("express");
const BookRouter = require('./routes/book_routes');
const connectDB = require("./db/db");

const app = express();

connectDB();

app.use(express.json());
app.use('/api/book',BookRouter);

app.get('/', (req, res) => {
    res.status(400).send('Hello World!')
  })

const  PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})