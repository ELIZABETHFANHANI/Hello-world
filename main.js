let nomeUsuario ="";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario == ""){
      nomeUsuario - prompt(" Qual o seu nome?");
}

if(nomeUsuario == null){
    elemento.textContent = 'Seja Muito Bem-Vindo';
}else{
    elemento.textContent = nomeUsuario;
    
}

