import express from 'express';
import ProfileUserController from '../controller/profileUser';

const router = express.Router();
const profileUserController = new ProfileUserController();

router.get('/a', profileUserController.getUsers);
router.put('/email', profileUserController.updateEmail);
router.put('/password', profileUserController.updatePassword);
router.put('/address', profileUserController.addAddress);

export default router;
 









