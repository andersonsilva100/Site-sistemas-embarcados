const express = require('express');
const app = express();


app.get(4000, function (erro) {
    if(erro){
        console.log("ocorreu um erro");
    }
    else{
        console.log("servidor iniciado com sucesso");
    }

})

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Nome: " + name + "\nE-mail: " + email + "\nMensagem: " + message);
}



//var http = required("http")  //carrega o módulo  http na variavel http
//http.createServer().listen(8181); //criação de um server de http em node

//console.log("meu servidor esta rodando");
//--------------------------------------------------
//http.creatServer(function(requisicao,resposta){
// resposta.end("<h1> Bem vindo ao meu site" );
//)}.listen(3000);
//console.log("meu servidor esta rodando");

