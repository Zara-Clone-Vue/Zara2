// import cart from '../controller/cartController';
// import express from 'express'

// const routeCart=express.Router();

// routeCart.get('/cart',cart.allCarts);
// routeCart.get('/cart/:id',cart.cartForUser)

// routeCart.post('/cart',cart.toCart)

// routeCart.delete('/cart/:id',cart.remove)

// routeCart.delete('/userCart/:id',cart.removeCartOfUser)

// export default routeCart;

// src/routes/cartRoutes.ts
import { Router } from 'express';
import {
  allCarts,
  cartForUser,
  toCart,
  remove,
  removeCartOfUser,
} from '../controller/cartController';

const cartrouter = Router();

cartrouter.get('/cart', allCarts);
cartrouter.get('/cart/:id', cartForUser);
cartrouter.post('/cart', toCart);
cartrouter.delete('/del/:id', remove);
cartrouter.delete('/userCart/:id', removeCartOfUser);

export default cartrouter;
