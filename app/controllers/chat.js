const { check, validationResult } = require('express-validator');
const { emit } = require('../../config/server');

module.exports.iniciaChat = async function(application, req, res){
  await check("apelido")
    .not()
    .isEmpty()
    .withMessage("Nomr ou Apelido é obrigatório")
    .isLength({min: 3, max: 15})
    .withMessage("Nome ou Apelido deve ter entre 3 a 15 caracteres")
    .run(req);

    const validationResults = validationResult(req);

    var apelido = req.body;
    if (!validationResults.isEmpty()) {

         res.render("index", { validacao: validationResults.array()})
        
    } else {
    
      application.get('io').emit('msgParaCliente',{apelido: apelido.apelido, mensagem: ' acabou de  entrar no chat'});
        res.render("chat");
    }
    

}