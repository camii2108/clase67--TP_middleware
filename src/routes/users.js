const router = require('express').Router();

const { register, login } = require('../controllers/usersController');

/* /users */

router
    .get('/register',register)
    .get('/login',login)


module.exports = router;