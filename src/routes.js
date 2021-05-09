const express = require('express');
const router = express.Router();
const baseUrl =  "../public/views/";
const path = require('path');

router.get("/", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'index.html'))});

module.exports = router;