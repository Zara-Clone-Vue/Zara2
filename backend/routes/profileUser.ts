import express from 'express';
import ProfileUserController from '../controller/profileUser';


const profileUserController = new ProfileUserController();
const prouter = express.Router();
prouter.get('/a', profileUserController.getUsers);
prouter.put('/email', profileUserController.updateEmail);
prouter.put('/password', profileUserController.updatePassword);
prouter.put('/address', profileUserController.addAddress);
prouter.get('/one/:id', profileUserController.getUserById)



export default prouter;
 









