

const form = document.getElementById("form");


form.addEventListener("submit", function (e) {
  e.preventDefault()

  validarCampos();

   console.log("clicou no enviar");



});



//validar todos os campos

function validarCampos() {

  let nome = document.getElementById("nome");

  let email = document.getElementById("email");

  let telefone = document.getElementById("telefone");

  const mensagem = document.getElementById("mensagem");

  let mensagemErro = document.getElementById("mensagem-erro");



  if (nome.value === "" || email.value === "" || telefone.value === "" || mensagem.value === "") {



    mensagemErro.textContent = "Preencha todos os campos";
    mensagemErro.style.color = "red";
  
  } else {
    
  
   
    mensagemErro.textContent = "Enviado com sucesso";
    mensagemErro.style.color = "green";
   
    
 
  }

}






