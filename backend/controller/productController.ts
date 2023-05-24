import { Request,Response } from 'express';
import {product} from '../model/product';
import {AppDataSource} from '../index'
import { getRepository } from "typeorm";
import cloudinary from "cloudinary"

 const Cloudinary=cloudinary.v2
Cloudinary.config({
  cloud_name: "dzs2vkmbq",
  api_key: "885481975116747",
  api_secret: "oUO_ImkJff7SBOG-8kVGejsd8W4",
});
const getAllProducts = async (req: Request, res: Response) => {
  const products = await AppDataSource.getRepository(product).find();
console.log(products.length)
  res.status(200).send(products);
};
const getByCategory = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(product);
  const adultProducts = await productRepository.find({ where: { category: req.params.category },});
  res.status(200).send(adultProducts);
};
const updateProduct = async (req: Request, res: Response) => {
  try{
  
    const cloudimage = await Cloudinary.uploader.upload(`${req.body.image}`);
  
  const productRepository = AppDataSource.getRepository(product);
  let productToUpdate = await productRepository.findOneBy({id:Number(req.params.id)})
if(productToUpdate){
  productToUpdate.clothesName=req.body.clothesName
  productToUpdate.category=req.body.category
  productToUpdate.price=req.body.price
  productToUpdate.rating=req.body.rating
  productToUpdate.times=req.body.times
  productToUpdate.image=cloudimage.secure_url
  const updated=await productRepository.save(productToUpdate)
res.status(201).send(updated)}
}
catch (err) {
  res.status(500).send(err)
}

}

const removeProduct = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(product)
  const productToRemove = await productRepository.findOneBy({id:Number(req.params.id)})
  if(productToRemove)
  await productRepository.remove(productToRemove)
  res.status(204).send("successfully removed")
}

const postProduct = async (req: Request, res: Response) => {
 try{ const cloudimage = await Cloudinary.uploader.upload(`${req.body.image}`);
  const newProduct=new product()
  newProduct.clothesName=req.body.clothesName
  newProduct.image=cloudimage.secure_url
  newProduct.price=req.body.price
  newProduct.category=req.body.category
  newProduct.rating=req.body.rating
  newProduct.times=req.body.times
  await AppDataSource.manager.save(newProduct)
  res.status(201).send(newProduct)}
  catch(err) {
    console.log(err)
  }
}
// const all=(req: Request, res: Response)=>{
//     product.getAllProducts((err: any, results: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         res.status(200).json({ products: results })
//       })
// }

// const adult=(req: Request, res: Response)=>{
//     product.getAdultCategory((err: any, results: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         res.status(200).json({ products: results });
//       })
// }


// const kids=(req: Request, res: Response)=>{
//     product.getKidsCategory((err: any, results: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         res.status(200).json({ products: results });
//       })
// }


// const womens=(req: Request, res: Response)=>{
//     product.getWomenCategory((err: any, results: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         res.status(200).json({ products: results });
//       })
// }

// const men=(req: Request, res: Response)=>{
//     product.getMenCategory((err: any, results: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         res.status(200).json({ products: results });
//       })
// }


// const beauty=(req: Request, res: Response)=>{
//     product.getBeauty((err: any, results: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
    
//         res.status(200).json({ products: results });
//       })
// }

// const newProduct=(req: Request, res: Response)=>{
//     const {clothesName,image,category,price}=req.body
//     product.addProduct([clothesName,image,category,price],(err,result)=>{
//         if(err) res.json(err);
//         res.json("created")
//     })
// }

// const remove=(req: Request, res: Response)=>{
//     product.removeProduct([req.params.id],(err,result)=>{
//         if(err) res.json(err);
//         res.json('deleted')
//       })
// }
// const edit=(req: Request, res: Response)=>{
//     const { id } = req.params;
//     const { clothesName, image, price,category} = req.body;
//     const updateValues = [clothesName, image, price, category,id];
//     product.editProduct(updateValues,(err: any, result: any) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
//         if (result.affectedRows === 0) {
//           return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json({ message: 'Product updated successfully' });
//       })
// }

// const oneProduct=(req: Request, res: Response)=>{
//     product.getOneProduct([req.params.id],(err,result)=>{
//         if(err) res.json(err);
//         res.json(result)
  
//     })
// }

// const search=(req: Request, res: Response)=>{
//   const {name} = req.params;
//   product.searchProduct([`%${name}%`], (err: any, results: any) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

//     res.status(200).json({ products: results });
//   })
// }

export default {
    // all,
    // adult,
    // kids,
    // womens,
    // men,
    // beauty,
    // newProduct,
    // remove,
    // edit,
    // oneProduct,
    // search,
    getAllProducts,
    getByCategory,
    updateProduct,
    removeProduct,
    postProduct
}