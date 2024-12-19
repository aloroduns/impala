const express = require('express');
const { logon, logoff, test} = require('../controllers/authcontrol.js');
const auth = require('../middlewares/auth');
const router = express.Router();


router.post('/logon', logon);

router.delete('/logoff', logoff);

router.get('/test', auth, test);

module.exports = router;