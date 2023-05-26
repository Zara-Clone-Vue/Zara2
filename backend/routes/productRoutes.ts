import product from '../controller/productController';
import express from 'express'

const routeProduct=express.Router();

routeProduct.get('/all',product.getAllProducts)
routeProduct.get('/:category',product.getByCategory)
routeProduct.patch("/product/:id",product.updateProduct)
routeProduct.delete("/product/:id",product.removeProduct)
routeProduct.post("/product",product.postProduct)
routeProduct.get('/product/:name',product.getOneProduct)
// routeProduct.get('/all/adult',product.adult)
// routeProduct.get('/all/kids',product.kids)
// routeProduct.get('/all/womens',product.womens)
// routeProduct.get('/all/men',product.men)
// routeProduct.get('/all/beauty',product.beauty)
// routeProduct.get('/product/:id',product.oneProduct)
// routeProduct.get('/search/:name',product.search)

// routeProduct.post('/product',product.newProduct)

// routeProduct.put('/product/:id',product.edit)

// routeProduct.delete('/product/:id',product.remove)

export default routeProduct;