import express ,{Router}from 'express';
import { addStudent,getUsers,getUser,editUser ,deleteUser} from '../controller/user-controller.js';
//import {  } from '../../client/src/Service/api.js';
//import router,  from 'express';
//import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.get('/all', getUsers);

router.post('/add', addStudent);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);



export default router;