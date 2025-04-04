const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());
app.use('/products', productRoutes);

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).send('User service is healthy');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
