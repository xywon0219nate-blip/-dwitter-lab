import * as repository from '../repository/headerRepo.js'

export const getHeader = async(req,res,next) => {
   const header = await repository.getHeader();
   res.json({"result":header});
}                                                                                         