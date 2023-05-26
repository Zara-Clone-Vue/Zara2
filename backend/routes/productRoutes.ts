import product from '../controller/productController';
import express from 'express'

const routeProduct=express.Router();

routeProduct.get('/all',product.getAllProducts)
routeProduct.get('/:category',product.getByCategory)
routeProduct.put("/product/:name",product.updateProduct)
routeProduct.delete("/product/:name",product.removeProduct)
routeProduct.post("/product",product.postProduct)
routeProduct.get('/product/:name',product.getOneProduct)


export default routeProduct;