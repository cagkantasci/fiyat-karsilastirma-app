const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fiyatKarsilastirma', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Basic API routes
app.get('/api/products', (req, res) => {
  res.send('Get all products');
});

app.get('/api/markets', (req, res) => {
  res.send('Get all markets');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
