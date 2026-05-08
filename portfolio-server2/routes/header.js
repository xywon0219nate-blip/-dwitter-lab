import express from 'express';
// import * as controller from '../controller/headerController.js'

const router = express.Router();

router.get('/', (req,res,next)=> {
   // app.js에서 이미 .header라고 작성하였기에, 해당 부분에서는 '/'만 작성하면 됨
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