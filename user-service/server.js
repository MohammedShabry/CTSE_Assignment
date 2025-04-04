const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).send('User service is healthy');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
