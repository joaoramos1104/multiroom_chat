/* importar as configurações do servidor */
const { on } = require('./config/server');
var app = require('./config/server');

/* Parametrizar a porta de escuta */
//atribuindoo a uma variavel para uso no socket.io
var server = app.listen(8089, function () {
    console.log('Servidor online');    
})

var io = require('socket.io').listen(server);
app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', function(socket){
    console.log('Usuário conectou');


    socket.on('disconnect', function(){
        console.log("usuário dsconecou");
    });

    socket.on('msgParaServidor', function(data){
        //diálogo
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

        //participantes
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit('participantesParaCliente', {apelido: data.apelido});
            socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});
        }
      

    });
    
});
