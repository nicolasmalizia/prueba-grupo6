// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

//router.get('/catdetail/', productsController.catdetail); /* GET - All products */
router.get('/login/', productsController.login); /* GET - All products */
router.get('/', productsController.root); /* GET - All products */
router.get('/detail/:productId/', productsController.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/catmujer/', productsController.catmujer); 
router.get('/cathombre/', productsController.cathombre); 
router.get('/register/', productsController.cathombre); 
router.get('/create/', productsController.create); /* GET - Form to create */
router.post('/create/', productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:productId', productsController.edit); /* GET - Form to create */
router.put('/edit/:productId', productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:productId', productsController.destroy); /* DELETE - Delete from DB */

module.exports = router;
