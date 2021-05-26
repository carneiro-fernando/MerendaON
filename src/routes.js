const express = require('express');
const router = express.Router();
const baseUrl =  "../public/views/";
const path = require('path');

router.get("/", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'index.html'))});
router.get("/student", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'student.html'))});
router.get("/parent", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'parent.html'))});
router.get("/registerParent", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'registerParent.html'))});
router.get("/registerChild", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'registerChild.html'))});



module.exports = router;
