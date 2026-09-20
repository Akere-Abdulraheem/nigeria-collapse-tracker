require('dotenv').config();
const mongoose = require('mongoose');

// Same schema as server.js
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

const collapseData = [
  // 2026
  { date: "2026-07-29", location: "Unguwar Rogo, Bauchi Road", state: "Sokoto", type: "Under Construction (2-storey)", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2026 },
  { date: "2026-06-25", location: "Alakija, Satellite Town", state: "Lagos", type: "Shopping Complex", status: "Confirmed", deaths: 9, injuries: 27, cause: "Structural failure / substandard materials", year: 2026 },
  { date: "2026-06-24", location: "Odili Road, Port Harcourt", state: "Rivers", type: "Under Construction (5-storey)", status: "Confirmed", deaths: 1, injuries: 7, cause: "Approval violation", year: 2026 },
  { date: "2026-06-05", location: "Lekki Phase 1", state: "Lagos", type: "Under Construction (3-storey)", status: "Confirmed", deaths: 1, injuries: 0, cause: "Structural defect", year: 2026 },
  { date: "2026-05-15", location: "Ikeja", state: "Lagos", type: "Residential (2-storey)", status: "Investigating", deaths: 0, injuries: 0, cause: "Under investigation", year: 2026 },
  { date: "2026-01-20", location: "Akure", state: "Ondo", type: "Under Construction (2-storey)", status: "Confirmed", deaths: 0, injuries: 7, cause: "Substandard materials", year: 2026 },

  // 2025
  { date: "2025-12-18", location: "Kubwa, Phase III", state: "FCT", type: "Under Construction (2-storey)", status: "Confirmed", deaths: 0, injuries: 9, cause: "Structural failure", year: 2025 },
  { date: "2025-12-16", location: "Bwari", state: "FCT", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 4, cause: "Structural failure", year: 2025 },
  { date: "2025-12-12", location: "Gbagada", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 1, cause: "Under investigation", year: 2025 },
  { date: "2025-12-01", location: "Ado Ekiti", state: "Ekiti", type: "Under Construction", status: "Confirmed", deaths: 1, injuries: 1, cause: "Structural failure", year: 2025 },
  { date: "2025-11-28", location: "Dutse", state: "FCT", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 3, cause: "Structural failure", year: 2025 },
  { date: "2025-11-20", location: "Ibadan", state: "Oyo", type: "Under Construction", status: "Confirmed", deaths: 2, injuries: 7, cause: "Substandard materials", year: 2025 },
  { date: "2025-11-10", location: "Ilorin", state: "Kwara", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-10-28", location: "Lokoja", state: "Kogi", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-10-20", location: "Ogbomosho", state: "Oyo", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-10-16", location: "Dutsin-Ma", state: "Katsina", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 2, cause: "Structural failure", year: 2025 },
  { date: "2025-10-06", location: "Ikoyi", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Structural failure", year: 2025 },
  { date: "2025-10-05", location: "Ikeja", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 3, injuries: 5, cause: "Structural failure", year: 2025 },
  { date: "2025-09-26", location: "Kano", state: "Kano", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 4, cause: "Structural failure", year: 2025 },
  { date: "2025-09-22", location: "Asaba", state: "Delta", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Structural failure", year: 2025 },
  { date: "2025-09-15", location: "Lagos Island", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-09-10", location: "Mararaba", state: "Nasarawa", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-09-08", location: "Awka", state: "Anambra", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Structural failure", year: 2025 },
  { date: "2025-09-03", location: "Kaduna", state: "Kaduna", type: "Under Construction", status: "Confirmed", deaths: 1, injuries: 0, cause: "Structural failure", year: 2025 },
  { date: "2025-08-28", location: "Ajah", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Structural failure", year: 2025 },
  { date: "2025-08-25", location: "Kubwa", state: "FCT", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Substandard materials", year: 2025 },
  { date: "2025-08-20", location: "Ojo", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 3, cause: "Structural failure", year: 2025 },
  { date: "2025-08-15", location: "Surulere", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 2, injuries: 5, cause: "Structural failure", year: 2025 },
  { date: "2025-08-12", location: "Ondo", state: "Ondo", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-08-08", location: "Suleja", state: "Niger", type: "Under Construction", status: "Confirmed", deaths: 1, injuries: 2, cause: "Structural failure", year: 2025 },
  { date: "2025-08-04", location: "Keffi", state: "Nasarawa", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-08-01", location: "Kano", state: "Kano", type: "Residential", status: "Confirmed", deaths: 3, injuries: 2, cause: "Substandard materials", year: 2025 },
  { date: "2025-07-28", location: "Ibadan", state: "Oyo", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-24", location: "Port Harcourt", state: "Rivers", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Structural failure", year: 2025 },
  { date: "2025-07-21", location: "Enugu", state: "Enugu", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-18", location: "Osogbo", state: "Osun", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-15", location: "Abakaliki", state: "Ebonyi", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-12", location: "Jos", state: "Plateau", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-10", location: "Calabar", state: "Cross River", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-08", location: "Kaduna", state: "Kaduna", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-05", location: "Benin City", state: "Edo", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-03", location: "Yenagoa", state: "Bayelsa", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-07-01", location: "Maiduguri", state: "Borno", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-06-28", location: "Sokoto", state: "Sokoto", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },
  { date: "2025-06-25", location: "Kebbi", state: "Kebbi", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2025 },

  // 2024
  { date: "2024-12-10", location: "Lekki, Lagos", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 2, injuries: 5, cause: "Structural failure", year: 2024 },
  { date: "2024-11-15", location: "Abuja", state: "FCT", type: "Residential", status: "Confirmed", deaths: 1, injuries: 3, cause: "Substandard materials", year: 2024 },
  { date: "2024-10-20", location: "Kano", state: "Kano", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 2, cause: "Structural failure", year: 2024 },
  { date: "2024-09-08", location: "Port Harcourt", state: "Rivers", type: "Commercial", status: "Confirmed", deaths: 3, injuries: 8, cause: "Structural failure", year: 2024 },

  // 2023
  { date: "2023-12-05", location: "Ikoyi, Lagos", state: "Lagos", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2023 },
  { date: "2023-11-12", location: "Abuja", state: "FCT", type: "Under Construction", status: "Confirmed", deaths: 2, injuries: 4, cause: "Structural failure", year: 2023 },
  { date: "2023-10-28", location: "Ibadan", state: "Oyo", type: "Residential", status: "Confirmed", deaths: 1, injuries: 2, cause: "Substandard materials", year: 2023 },
  { date: "2023-09-15", location: "Kano", state: "Kano", type: "Under Construction", status: "Confirmed", deaths: 0, injuries: 0, cause: "Under investigation", year: 2023 }
];

async function seedDB() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nigeria_collapse_tracker';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await CollapseRecord.deleteMany({});
    console.log('Cleared existing records');

    // Insert new data
    await CollapseRecord.insertMany(collapseData);
    console.log(`Inserted ${collapseData.length} records`);

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedDB();
