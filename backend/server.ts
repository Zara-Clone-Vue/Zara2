// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { Sequelize, Model, DataTypes } from 'sequelize';
// import bcrypt from 'bcrypt';

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());

// // Create Sequelize instance
// const sequelize = new Sequelize('zara', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
// }); 

// sequelize.authenticate().then(() => {
//     console.log('db connected');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });

// // Define User model
// interface UserAttributes {
//   username: string;
//   email: string;
//   password: string;
//   address: string;
  
// }

// class User extends Model<UserAttributes> implements UserAttributes {
//   public username!: string;
//   public email!: string;
//   public password!: string;
//   public address!: string;
  
// }

// User.init(
//   {
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     address: DataTypes.STRING,
   
//   },
//   { sequelize, modelName: 'user' }
// );

// // Create a new user
// app.post('/api/user', async (req: Request, res: Response) => {
//   try {
//     const { username, email, password, address } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//       address,
     
//     });
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the user.' });
//   }
// });

// // Update user information
// app.put('/api/users/:id', async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { email, password, address } = req.body;

//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found.' });
//     }

//     // Update the user information
//     if (email) {
//       user.email = email;
//     }
//     if (password) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       user.password = hashedPassword;
//     }
//     if (address) {
//       user.address = address;
//     }
//     await user.save();

//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while updating the user.' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on ${port}`);
// });
