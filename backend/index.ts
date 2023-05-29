import "reflect-metadata";
import express, {Express} from 'express';
import { DataSource } from 'typeorm';
//exporting the product orm model
import {product} from "../backend/model/product"
//exporting the routes 
import routeProduct from './routes/productRoutes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import router from './routes/profileUser'

// import routerUser from './routes/userRoutes'

import { user } from "./model/profileUser";

                                                              
 import helpp from './routes/helpRoutes';
import {  helpuser } from "./model/help";
import cartrouter from './routes/cartRoutes'
import {  cart } from "./model/cart";


// import routeCart from './routes/cartRoutes';
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//creating the connection to the database
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Sarhane1991.",
  database: "zara",
  entities: [product,helpuser,cart,user],
  synchronize: true,
  logging: false,
})
//initializing the connection and using the routes 
AppDataSource.initialize()
    .then(() => {
    console.log("databse connected")
    app.use("/api",cartrouter)
    app.use("/api",router)
    app.use("/api",helpp)
    app.use("/api",routeProduct)
    
    
  
  })
  

    .catch((error) => console.log(error))


app.listen(5000,()=> console.log("listening on port"+5000))
