const express = require('express');
const router = express.Router();

const billboardGlobal = require('./billboard-global');
const billboard = require('./billboard');
const hot = require('./hot');

router.use('/billboard-global-200',billboardGlobal);
router.use('/billboard-200',billboard);
router.use('/hot-100',hot);

module.exports = router;