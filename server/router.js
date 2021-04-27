const router = require('express').Router();
const auth = require('./controllers/auth');

router.post('/user', auth.getOne);
router.post('/register', auth.register);

module.exports = router;
