const router = require('express').Router();
const {list} = require('../controllers/productsController')

/*  /products */

router
    .get('/',list)
    .get('/detail', detail)

module.exports = router;