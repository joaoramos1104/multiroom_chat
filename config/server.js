/* importar o modulo do framewrk express */
var express = require('express');

/* Importar o módulo do consign */
var consign = require('consign');

/* impottar o body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/*iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurando o middleware express.static */
app.use(express.static('./app/public'));

/* configurando  o middeleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurando o middeleware express-validator  */
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllesrs para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o objeto app*/
module.exports = app;