import "reflect-metadata";
import express, {Express} from 'express';
import { DataSource } from 'typeorm';
import {product} from "../backend/model/product" 
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
AppDataSource.initialize()
    .then(() => {
    console.log("databse connected")
    app.use("/api",helpp)
    app.use("/app",cartrouter)
    app.use("/api",router)
    app.use("/api",routeProduct)
    
 
    
  
  })
  

    .catch((error) => console.log(error))

// app.use(routeUser)

// app.use(routeCart)
app.listen(5000,()=> console.log("listening on port"+5000))
// app.post('/users/signup', async (req, res) => {
//     const { username, email, isAdmin, password } = req.body;
//     connection.query("SELECT * FROM user WHERE username=?", [req.body.username], async (err:any, results: any) => {
//       if (err) {
//         return res.status(500).json({ message: 'Internal server error' });
//       }
      
//       if (results.length>0) {
//         return res.status(400).json({ message: 'Username already exists' });
//       }
//       const hashedPassword = await bcrypt.hash(password, 10);
//       connection.query("INSERT INTO user (username, email, isAdmin, password) VALUES (?, ?, ?, ?)", [username, email, isAdmin, hashedPassword], (err, result) => {
//         if (err) {
//           return res.status(500).json({ message: 'Internal server error' });
//         }
//         res.status(200).json({ message: 'User registered successfully' });
//       });
//     });
// });
// app.post('/users/login', async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     connection.query("SELECT * FROM user WHERE username=?",[username],async(err,user:any)=>{
//         if(err) res.json(err);
//         if (user.length===0) {
//           return res.status(401).json({ message: 'Invalid username or password' });
//         }
//         const comparePassword = await bcrypt.compare(password, user[0].password);
//         if (!comparePassword) {
//           return res.status(401).json({ message: 'Invalid username or password' });
//         }
//         const token = jwt.sign({ id: user.id, username: user.username }, process.env.ACCESS_TOKEN);
        
//         return res.status(200).json({ token,id:user[0].id,isAdmin:user[0].isAdmin});

//     });
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });






// app.listen(3001,()=>{
//     console.log('server listen to port '+3001)})
  
 