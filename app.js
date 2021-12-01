/* importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */
//atribuindoo a uma variavel para uso no socket.io
var server = app.listen(8089, function () {
    console.log('Servidor online');    
})

require('socket.io').listen(server);