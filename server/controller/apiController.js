import * as repository from '../repository/apiRepository.js';

export const getFormData = (req, res) => {
   console.log('form data::', req.body.formData);
   res.json({"result": true});
}

export const getProductDetail = (req, res) => {  
   // console.log(req.params.pid);
   res.json({"result": `${req.params.pid}의 상세정보`});
}

export const getProducts = (req, res, next) => {
   const products = repository.getProducts();
   res.json({"products": products});
}


export const getFruits = (req, res, next) => {
   const fruits = [
      { "name": "apple", "color": "red", "emoji": "🍎" },
      { "name": "lemon", "color": "yellow", "emoji": "🍋" },
      { "name": "tomato", "color": "red", "emoji": "🍅" },
   ]
   res.json({"fruits": fruits});
}