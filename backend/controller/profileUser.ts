import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {AppDataSource} from '../index'
import { user } from '../model/profileUser';

class ProfileUserController {
   
  

    async getUsers(req: Request, res: Response) {
      
        try {
          //////////////////////////////////////////////////////////////
          const profileUserRepository = AppDataSource.getRepository(user);
          const users = await profileUserRepository.find();
          console.log(users)
    
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
  }
  
  export default ProfileUserController;
  