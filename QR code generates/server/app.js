//app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes'); // Importing the router module

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', router); // Adding router to the app with a base path

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

