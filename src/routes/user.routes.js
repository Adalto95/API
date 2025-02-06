import { Router } from "express";
import userController from '../controller/user.controllers.js'
import { validate } from "../middlewares/validation.middlewares.js";
import { userShema } from "../schema/user.schema.js";

const router = Router();

router.post('/users',validate(userShema), userController.createUserController);

router.get("/users", userController.findAllUserController);


export default router