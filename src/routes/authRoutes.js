const express = require('express');
const { register, login, getMe } = require('../controllers/auth.Controller.js');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);

module.exports = router;