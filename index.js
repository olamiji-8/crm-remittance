const express = require("express");
const cors = require("cors");
const dbconnect = require('./Config/dbconnect');

const userRoutes = require('./routes/userRoutes');

const authenticate = require('./Middlewares/authMiddleware');

const app = express();
app.use(cors());


const dotenv = require("dotenv").config();
const PORT = process.env.PORT

dbconnect();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Protected routes (require authentication)
app.use('/protected-route', authenticate, (req, res) => {
  // Handle protected route logic
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});