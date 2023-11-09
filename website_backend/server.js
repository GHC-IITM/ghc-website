require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT
const app = express();
const db = require('./config/db');
const cors = require('cors');
app.use(cors(['http://localhost:3000']));
db();
const router = require('./routes/web');
app.use(express.json());
router(app);
app.listen(PORT,(req, res) => {
    console.log(`Server is running on port ${PORT}`);
});