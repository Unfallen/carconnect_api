// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs/promises');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(cors());

app.post('/api/customer', async (req, res) => {
    const formData = req.body;
    try {
        await fs.appendFile('customerData.txt', JSON.stringify(formData) + '\n');
        res.status(200).send('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
