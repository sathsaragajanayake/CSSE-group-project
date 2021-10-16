const express = require('express');
const router = express.Router();
const passangerController = require('../controllers/passangerController');

router.get('/:startLocation', passangerController.getpassangerDetailsForLocation);
router.get('/', passangerController.getDetails);

// router.get('/add', (req,res) => {

// });
module.exports = router; 