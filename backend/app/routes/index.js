import express from 'express';
import 
    {   getAllProducts,
        createdProduct,
        getProductById,
        updateProduct,
        deleteProduct
    }
 from '../controllers/productController.js';


const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/',createdProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default  router;