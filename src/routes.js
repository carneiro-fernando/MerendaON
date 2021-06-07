const express = require('express');
const router = express.Router();
const baseUrl =  "../public/views/";
const path = require('path');

router.get("/", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'index.html'))});
router.get("/student", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'student.html'))});
router.get("/parent", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'parent.html'))});
router.get("/registerParent", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'registerParent.html'))});
router.get("/registerChild", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'registerChild.html'))});
router.get("/consultParent", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'consultParent.html'))});
router.get("/consultChild", (req, res) => {res.sendFile(path.join(__dirname, baseUrl, 'consultChild.html'))});



module.exports = router;
