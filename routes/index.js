const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brandController');
const categoryController = require('../controllers/categoryController');
const segmentController = require('../controllers/segmentController');

router.get('/brands', brandController.getBrands);
router.get('/categories', categoryController.getCategories);
router.get('/segments', segmentController.getSegments);

module.exports = router;
