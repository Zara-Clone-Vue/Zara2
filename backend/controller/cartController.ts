// import { Request,Response } from 'express';
// import cart from '../model/cart';

// const allCarts=(req:Request,res:Response)=>{
//     cart.getAllCarts((err,result)=>{
//         if(err) res.json(err);
//         res.json(result)
//     })
// }

// const cartForUser=(req:Request,res:Response)=>{
//     cart.getCartsOfUser([req.params.id],(err,results:any)=>{
//         if(err) res.json(err)
//         res.json(results)
        
//       })
// }

// const toCart=(req:Request,res:Response)=>{
//     const {user_id,product_id}=req.body
//     cart.addCart([user_id,product_id],(err,result)=>{
//         if(err) res.json(err);
//         console.log(result)
//         res.json({message:"product successfully added to your cart"})
//     })
// }

// const remove=(req:Request,res:Response)=>{
//     cart.removeCart([req.params.id],(err,result)=>{
//         if(err) res.json(err);
//         res.json('deleted')
//       })
// }

// const removeCartOfUser=(req:Request,res:Response)=>{
//     cart.removeByUser([Number(req.params.id)],(err,result)=>{
//         if(err) res.json(err);
//         res.json('deleted')
//       })
// }

// export default {
//     allCarts,
//     cartForUser,
//     toCart,
//     remove,
//     removeCartOfUser
// }

// src/controller/CartController.ts
// src/controller/CartController.ts
// src/controller/cartController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {cart} from '../model/cart';

export const allCarts = async (_req: Request, res: Response) => {
  const cartRepository = getRepository(cart);
  try {
    const result = await cartRepository.find();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

export const cartForUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const cartRepository = getRepository(cart);
  try {
    const results = await cartRepository.find({ where: { user_id: userId } });
    res.json(results);
  } catch (err) {
    res.json(err);
  }
};

export const toCart = async (req: Request, res: Response) => {
  const { user_id, product_id } = req.body;
  const cartRepository = getRepository(cart);
  try {
    const newCart = new cart();
    newCart.user_id = user_id;
    newCart.product_id = product_id;
    await cartRepository.save(newCart);
    res.json({ message: 'Product successfully added to your cart' });
  } catch (err) {
    res.json(err);
  }
};

export const remove = async (req: Request, res: Response) => {
  const cartId = parseInt(req.params.id);
  const cartRepository = getRepository(cart);
  try {
    await cartRepository.delete(cartId);
    res.json('Deleted');
  } catch (err) {
    res.json(err);
  }
};

export const removeCartOfUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const cartRepository = getRepository(cart);
  try {
    await cartRepository.delete({ user_id: userId });
    res.json('Deleted');
  } catch (err) {
    res.json(err);
  }
};
