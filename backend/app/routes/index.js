import express from 'express';
import {getAllProducts,
    createdProduct,
getProductById,
updateProduct} from '../controllers/productController.js';


const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.patch('/:id',updateProduct);
router.post('/',createdProduct);

export default  router;