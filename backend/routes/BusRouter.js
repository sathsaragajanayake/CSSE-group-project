const express = require('express');
const router = express.Router();
const busController = require('../controllers/BusController');

router.post('/add', busController.AddDetails);
router.get('/', busController.getDetails);
router.get('/edit/:id', busController.editDetails);
router.post('/update/:id', busController.updateDetails);
router.post('/delete/:id', busController.deleteDetails);
router.get('/:date', busController.getbusDetailsForDate);

// router.get('/add', (req,res) => {

// });
module.exports = router;    