import express from 'express';
import * as controller from '../controller/usersController.js';

const router = express.Router();

const users = [
      { "id": "test", "pwd": "1234" },
      { "id": "hong", "pwd": "1111" },
      { "id": "test1234", "pwd": "test1234" }
   ];

router.get("/", controller.getUsers);

router.post("/login", controller.getLogin);

export default router;