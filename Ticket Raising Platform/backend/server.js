//index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ticketRaisingPlatform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api', ticketRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

