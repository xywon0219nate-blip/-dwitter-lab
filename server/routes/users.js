import express from 'express';

const router = express.Router();

const users = [
      { "id": "test", "pwd": "1234" },
      { "id": "hong", "pwd": "1111" },
      { "id": "test1234", "pwd": "test1234" }
   ];

router.get("/", (req, res) => {
   res.json({"users": users});
});    

router.post("/login", (req, res) => {
   const { id, pwd } = req.body.data;
   const userIdx = users.findIndex(user => user.id === id && user.pwd === pwd );
   const result = userIdx !== -1 ? true : false;
   res.json({"result": result});
});

export default router;