const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
