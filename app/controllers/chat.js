const { check, validationResult } = require('express-validator');

module.exports.iniciaChat = async function(application, req, res){
  await check("apelido")
    .not()
    .isEmpty()
    .withMessage("Nomr ou Apelido é obrigatório")
    .isLength({min: 3, max: 15})
    .withMessage("Nome ou Apelido deve ter entre 3 a 15 caracteres")
    .run(req);

    const validationResults = validationResult(req);

    if (!validationResults.isEmpty()) {
            console.log(validationResults.array());

         res.render("index", { validacao: validationResults.array()})
        
    } else {
        res.render("chat");
    }
    

}