const router = require('express').Router();
const auth = require('./controllers/auth');

router.get('/user', auth.getOne);
router.post('/register', auth.register);

module.exports = router;
