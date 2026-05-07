export const getUsers = (req, res) => {
   res.json({"users": users});
};   

export const getLogin = (req, res) => {
   const { id, pwd } = req.body.data;
   const userIdx = users.findIndex(user => user.id === id && user.pwd === pwd );
   const result = userIdx !== -1 ? true : false;
   res.json({"result": result});
};