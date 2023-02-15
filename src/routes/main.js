const router = require('express').Router();
const {index} = require('../controllers/mainController');

router 
  .get('/',index)

module.exports= router