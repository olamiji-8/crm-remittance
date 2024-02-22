const express = require("express");
const cors = require("cors");
const dbconnect = require('./Config/dbconnect');

const app = express();
app.use(cors());


const dotenv = require("dotenv").config();
const PORT = process.env.PORT

dbconnect();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});