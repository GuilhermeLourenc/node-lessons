/*
0 - Obter um usuario
1 - Obter número de telefone de um usuario a partir de seu Id
2 - Obter o endereço do usuario pelo Id 
*/

// Criada a função obterUsuario e o método setTimeout é designado para criar uma função cujo 
// a mesma  tem um tempo determinado para retornar alguns valores. 

function obterUsuario(callback) {
    setTimeout(function () {
// sendo aqui  o primeiro parâmetro é o erro 'null' e o segundo é o sucesso no caso o que está abaixo
        return callback  (null,  {
            id:  1,
            nome:  'Guilherme',
            dataNascimento: new Date () // Cria uma data aleatória
        })

    }, 1000)
}

function obterTelefone (idUsuario, callback) {
    setTimeout(() =>  {
    return callback(null, {
        telefone: '1100',
        ddd:  11
    } )

}, 2000);

}

function obterEndereco (idUsuario) {

}

// O primeiro parâmetro é erro e o segundo é sucesso, padrão  chamado  callback
function resolverUsuario (error, usuario) {
    console.log('usuario', usuario);
}

//Quando o obterUsuario terminar de executar sua função ele vai chamar a resolverUsuario
obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('DEU RUIM  em USUARIO',  error)
        return;
    }
});

obterTelefone(usuario.id, function resolverTelefone(error1, telefone)  {
    if (error) {
        console.error('DEU RUIM  em TELEFONE',  error)
        return;
    }
}) 


//console.log('telefone', telefone);
