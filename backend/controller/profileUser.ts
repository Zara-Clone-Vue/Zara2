import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {AppDataSource} from '../index'
import { user } from '../model/profileUser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class ProfileUserController {
     
  async getUsers(req: Request, res: Response) {
    try {
      const profileUserRepository = AppDataSource.getRepository(user);
      const users = await profileUserRepository.find();
      console.log(users)

      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  async getUserById(req: Request, res: Response) {
    try {
     const profileUserRepository = AppDataSource.getRepository(user);
      const users = await profileUserRepository.findOneBy({id:Number(req.params.id)});
  
      if (!users) {
        return res.status(404).json({ message: 'User not found' });
      }
   console.log(users);
       return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  
      async updateEmail(req: Request, res: Response) {
        const { id, email } = req.body;
      
        try {
          const profileUserRepository = AppDataSource.getRepository(user);
          const userToUpdate = await profileUserRepository.findOneBy(id);
      
          if (!userToUpdate) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          userToUpdate.email = email;
          await profileUserRepository.save(userToUpdate);
      
          return res.json(userToUpdate);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }
    async updatePassword(req: Request, res: Response) {
      const { id, password } = req.body;
  
      try {
        const profileUserRepository = AppDataSource.getRepository(user);
        const userToUpdate = await profileUserRepository.findOneBy(id);
  
        if (!userToUpdate) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        userToUpdate.password = password;
        await profileUserRepository.save(userToUpdate);
  
        return res.json(userToUpdate);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  
    async addAddress(req: Request, res: Response) {
      const { id, address } = req.body;
  
      try {
        const profileUserRepository =  AppDataSource.getRepository(user);
        const userToUpdate = await profileUserRepository.findOneBy(id);
  
        if (!userToUpdate) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        userToUpdate.adress = address;
        await profileUserRepository.save(userToUpdate);
  
        return res.json(userToUpdate);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    } 
    async signUp(req: Request, res: Response) {
      const { username, email, isAdmin,adress, password } = req.body;
  
      try {
        const userRepository = AppDataSource.getRepository(user);
        const existingUser = await userRepository.findOne({ where: { username } });
  
        if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
        }
  
        const hashedPassword = await bcrypt.hash(password, 10);
        const User = new user();
        User.username = username;
        User.email = email;
        User.adress =adress ;
        User.isAdmin = isAdmin;
        User.password = hashedPassword;
  
        await userRepository.save(User);
  
        return res.status(200).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    } 
    async login(req: Request, res: Response) {
      try {
        const { username, password } = req.body;
    
        const userRepository = AppDataSource.getRepository(user);
        const User = await userRepository.findOne({ where: { username } });
    
        if (!User) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
    
        const comparePassword = await bcrypt.compare(password, User.password);
    
        if (!comparePassword) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
    
        const token = jwt.sign({ id: User.id, username: User.username }, "process.env.ACCESS_TOKEN_SECRET", {
          expiresIn: '1h', 
        });
    
        return res.status(200).json({ token, id: User.id, isAdmin: User.isAdmin });
      } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
  }
}}
  export default ProfileUserController;
  