

export const getFooter = (req, res, next)=>{
   const footer = {
      "description": "Junior Software Engineer Judy's Portfolio - All right reserved",
      "list": [
               {"href": "#", "icon": "github"},
               {"href": "#", "icon": "linkedin"}
         ]
   }
   res.json({"result": footer});
}