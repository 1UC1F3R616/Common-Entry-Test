const express = require('express')
const router = express.Router();
const Difficult = require('../models/difficult-questions')
const Moderate = require('../models/moderate-questions')
const Easy = require('../models/easy-questions')

// Route For Posting Question 
router.post('/addquestion', async (req, res) => {
    // Adding Status For The User Logged In 

    // End ( Temp Changes )
})

module.exports = router;