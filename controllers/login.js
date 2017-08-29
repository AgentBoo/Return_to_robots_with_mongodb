// NOTE: Router
const express = require('express'),
       router = express.Router();

// NOTE: Supply data.js, global variables
let data = require('./../data.js');

router.get("/", (req, res) => { console.log(Hi)});

module.exports = router;
