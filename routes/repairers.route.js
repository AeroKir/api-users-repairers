const express = require('express');
const router = express.Router();
const repairersCtrl = require('../controllers/repairers.ctrl');

router.get('/', repairersCtrl.getRepairers);

module.exports = router;
