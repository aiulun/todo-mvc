const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// Go to homeController object/file and use the getIndex method
router.get('/', homeController.getIndex) 

module.exports = router