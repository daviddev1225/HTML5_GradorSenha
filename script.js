//Declarando as variaveis e seus valores
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

//Aqui vamos declarar duas variaveis para a composição das senhas
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//criação da função para gerar a senha
function gerarPassword(){
    let pass = "";
    for(let i=0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

//função para copiar a senha gerada
function copiaSenha(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}