const express = require('express');
const router = express.Router();
const cookRoutes = require('../controllers/Cook');

router.post('/', (req, res) => {
  console.log('Received POST request at /api/cooks');
  cookRoutes.createCook(req, res);
});

router.get('/', (req, res) => {
  console.log('Received all data request at /api/cooks');
  cookRoutes.getAllCooks(req, res);
});

router.get('/:id', (req, res) => {
  console.log('get by id data');
  cookRoutes.getOneCook(req, res);
});

router.put('/:id', (req, res) => {
  console.log('updated data');
  cookRoutes.updateCook(req, res);
});


router.delete('/:id', (req, res) => {
  console.log('deleted data');
  cookRoutes.deleteCook(req, res);
});



module.exports = router;
