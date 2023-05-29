//importing the functions from the controller
import product from '../controller/productController';
import express from 'express'
// creating a router
const routeProduct=express.Router();
//getting all products
routeProduct.get('/all',product.getAllProducts)
//getting products by category
routeProduct.get('/:category',product.getByCategory)
//apdating a product by it's name
routeProduct.put("/product/:name",product.updateProduct)
//deleting a product by its name
routeProduct.delete("/product/:name",product.removeProduct)
// posting a new product
routeProduct.post("/product",product.postProduct)
//getting a product by its name
routeProduct.get('/product/:name',product.getOneProduct)

//exporting the routes to use them in the index.ts
export default routeProduct;