import express from "express";
import * as controller from "../controller/footerController.js";

const router = express.Router();
router.get('/', (req,res,next)=> { 
   const footer = {
      "description": "Junior Software Engineer Judy's Portfolio - All right reserved",
      "list": [
               {"href": "#", "icon": "github"},
               {"href": "#", "icon": "linkedin"}
         ]
   }
   res.json({"result":footer});
})

export default router;
