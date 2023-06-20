const express = require('express');
const { generateImage } = require('../controllers/opeaiconroller');
const router = express.Router();
router.post('/images', generateImage)
module.exports=router;