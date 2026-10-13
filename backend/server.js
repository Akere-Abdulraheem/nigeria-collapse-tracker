require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files (like index.html)

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nigeria_collapse_tracker';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const collapseSchema = new mongoose.Schema({
  date: { type: String, required: true },
  location: { type: String, required: true },
  state: { type: String, required: true },
  type: { type: String, default: 'Other' },
  status: { type: String, default: 'Unconfirmed' },
  deaths: { type: Number, default: 0 },
  injuries: { type: Number, default: 0 },
  cause: { type: String },
  year: { type: Number, required: true }
});

const CollapseRecord = mongoose.model('CollapseRecord', collapseSchema);

// Routes
// 1. Get all records
app.get('/api/collapses', async (req, res) => {
  try {
    const records = await CollapseRecord.find().sort({ date: -1 });
    res.json(records);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// 2. Add a new record
app.post('/api/collapses', async (req, res) => {
  try {
    const newRecord = new CollapseRecord(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error saving record:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
