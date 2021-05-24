const express = require('express');
const router = express.Router();
const baseUrl =  "../public/views/";
const path = require('path');

router.get("/", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'index.html'))});
router.get("/register", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'register.html'))});
router.get("/registerParent", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'registerParent.html'))});
router.get("/registerChild", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'registerChild.html'))});
router.get("/navbar", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'navbar.html'))});
router.get("/test", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'testing.html'))});




module.exports = router;
