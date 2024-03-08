const express = require("express");
const cors = require("cors");
const dbconnect = require('./Config/dbconnect');

const userRoutes = require('./Routes/userRoutes');

const authenticate = require('./authMiddleware');
const app = express();
app.use(cors());


const dotenv = require("dotenv").config();
const PORT = process.env.PORT

dbconnect();


// Routes
app.use('/api/users', userRoutes);

// Protected routes (require authentication)
app.use('/protected-route', authenticate, (req, res) => {
  // Handle protected route logic
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});