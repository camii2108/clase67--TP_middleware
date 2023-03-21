const router = require('express').Router();

const { index, admin} = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin');

router.get('/',index);

router.get('/admin', accessAdmin, admin);

module.exports = router;