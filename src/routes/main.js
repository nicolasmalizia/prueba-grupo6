// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.root); /* GET - home page */
router.get('/catmujer', mainController.catmujer); /* GET - home page */
router.get('/cathombre', mainController.cathombre); /* GET - home page */
router.get('/search', mainController.search); /* GET - search results */

module.exports = router;
