const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());

// Serve static frontend assets (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Setup JSON Server router & default middleware
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ static: path.join(__dirname) });

app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`E-Commerce application running!`);
    console.log(`Server URL: http://localhost:${PORT}`);
    console.log(`=================================`);
});
