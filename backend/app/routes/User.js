import  express  from "express";
import { getUsers,register,Login } from "../controllers/UserController.js";

const router =express.Router();

router.get('/',getUsers);
router.post('/',register);
router.post('/login',Login)

export default router;