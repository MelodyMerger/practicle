const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const foodRoutes = require('./routes/foodRoutes');

const app = express();

app.use(express.json());
app.use('/foods', foodRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Food Delivery API is running 🍕' });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });