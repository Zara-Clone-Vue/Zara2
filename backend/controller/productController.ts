import { Request,Response } from 'express';
import {product} from '../model/product';
import {AppDataSource} from '../index'
import { getRepository } from "typeorm";
import cloudinary from "cloudinary"
//configuirig cloudinary
 const Cloudinary=cloudinary.v2
Cloudinary.config({
  cloud_name: "dzs2vkmbq",
  api_key: "885481975116747",
  api_secret: "oUO_ImkJff7SBOG-8kVGejsd8W4",
});
//this functions gets all products 
const getAllProducts = async (req: Request, res: Response) => {
  const products = await AppDataSource.getRepository(product).find();
console.log(products.length)
  res.status(200).send(products);
};
//this function get products by category
const getByCategory = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(product);
  const adultProducts = await productRepository.find({ where: { category: req.params.category },});
  res.status(200).send(adultProducts);
};
//this function updates products and uises cloudinary to store images
const updateProduct = async (req: Request, res: Response) => {
  try{
  
    const cloudimage = await Cloudinary.uploader.upload(`${req.body.image}`);
  
  const productRepository = AppDataSource.getRepository(product);
  let productToUpdate = await productRepository.findOneBy({clothesName:String(req.params.name)})
if(productToUpdate){
  productToUpdate.clothesName=req.body.clothesName
  productToUpdate.category=req.body.category
  productToUpdate.price=req.body.price
  productToUpdate.rating=req.body.rating
  productToUpdate.times=req.body.times
  productToUpdate.image=String(cloudimage)
  const updated=await productRepository.save(productToUpdate)
res.status(201).send(updated)}
}
catch (err) {
  res.status(500).send(err)
}

}
//this function removes a product
const removeProduct = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(product)
  const productToRemove = await productRepository.findOneBy({clothesName:String(req.params.name)})
  if(productToRemove)
  await productRepository.remove(productToRemove)
  res.status(204).send("successfully removed")
}
//this function posts a new product
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
//this function gets a product using its name
const getOneProduct = async (req: Request, res: Response) => {
  const productRepository = AppDataSource.getRepository(product)
  const one = await productRepository.findOneBy({clothesName:String(req.params.name)})
  res.status(200).send(one)
}

// exporting all the function to the routes
export default {
   getOneProduct,
    getAllProducts,
    getByCategory,
    updateProduct,
    removeProduct,
    postProduct
}