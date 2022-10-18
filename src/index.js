const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Settings 
const PORT = process.env.PORT || 3002
app.use(cors())

// Routes
app.use('/videos', require('./routes/videos.routes'));

// Starting server
app.listen(PORT, () => {
    console.log('Server on port', PORT);
});