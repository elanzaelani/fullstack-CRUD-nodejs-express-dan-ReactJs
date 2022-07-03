import  express  from "express";
import { getUsers,register,Login,Logout } from "../controllers/UserController.js";
import {verifyToken} from '../../middleware/VerifyToken.js'
import { refreshToken } from "../controllers/RefreshToken.js";

const router =express.Router();

router.get('/',verifyToken,getUsers);
router.post('/',register);
router.post('/login',Login);
router.get('/token',refreshToken);
router.delete('/logout',Logout);


export default router;