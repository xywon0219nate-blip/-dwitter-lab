import express from 'express';
// import * as controller from '../controller/headerController.js'

const router = express.Router();

router.get('/header', (req,res,next)=> {
   const header = {
      "logo": {
         "img": "images/favicon.ico",
         "name": "Judy"
      },
      "menus": [
         {"href": "/",   "style": "header-menu-item", "name": "Home"},
         {"href": "/about",  "style": "header-menu-item", "name": "About"},
         {"href": "/skills", "style": "header-menu-item", "name": "Skills"},
         {"href": "/work",   "style": "header-menu-item", "name": "My Work"},
         {"href": "/testimonials", "style": "header-menu-item", "name": "Testimonial"}
      ]
   }
   res.json({"result":header});
});

export default router;