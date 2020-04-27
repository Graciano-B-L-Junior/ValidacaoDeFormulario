var usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");
var email  = document.getElementById("email");
var submit = document.getElementById("submit");

var verificaemail = document.getElementById("alertaEmail");
var verificausuario = document.getElementById("alertaUsuario");
var verificasenha = document.getElementById("alertaSenha");

email.onkeyup = function(){
    if(email.value == email.value.match(/\w+@gmail.com/)){
        verificaemail.innerText = null;
        console.log("true")
    }else{
        verificaemail.style.color= "red";
        verificaemail.style.fontSize= "12px"
        verificaemail.innerText = "somente gmail";
    }
}

usuario.onkeyup = function(){
    if(usuario.value == usuario.value.match(/[A-Za-z_]+/)){
        verificausuario.innerText = null;
        console.log("true")
    }else{
        verificausuario.style.color= "red";
        verificausuario.style.fontSize= "12px"
        verificausuario.innerText = "somente letras sem espaços e acentos";
    }
}

senha.onkeyup = function(){
    if(senha.value == senha.value.match(/[A-Za-z]{1,5}|\W{1,6}|-{1,2}/)){
        verificasenha.innerText = null;
        console.log("true")
    
    }
    else if(senha.value == senha.value.match(/\W{1,6}[A-Za-z]{1,5}|[A-Za-z]{1,5}\W{1,6}/)){
        verificasenha.innerText = null;
        console.log("true")
    }

    else if(senha.value == senha.value.match(/-{1,2}\W{1,6}|\W{1,6}-{1,2}/)){
        verificasenha.innerText = null;
        console.log("true")
    }

    else if(senha.value == senha.value.match(/[A-Za-z]{1,5}-{1,2}|-{1,2}[A-Za-z]{1,5}/)){
        verificasenha.innerText = null;
        console.log("true")
    }
    else if(senha.value == senha.value.match(/[A-Za-z]{1,5}\W{1,6}-{1,2}|[A-Za-z]{1,5}-{1,2}\W{1,6}|-{1,2}[A-Za-z]{1,5}\W{1,6}|-{1,2}\W{1,6}[A-Za-z]{1,5}|\W{1,6}[A-Za-z]{1,5}-{1,2}|\W{1,6}-{1,2}[A-Za-z]{1,5}/)){
        verificasenha.innerText = null;
        console.log("true")
    }
    
    else{
        verificasenha.style.color= "red";
        verificasenha.style.fontSize= "12px"
        verificasenha.innerText = "Senha pode ter até 5 letras, 6 simbolos e 2 hifens";
    }
}