const formulario = document.getElementById("formulario");
const nome = document.getElementById("name");
const msgErro = document.getElementById("msg-erro");

formulario.addEventListener("submit", function (event) {
  if (nome.value.trim() === "") {
    msgErro.textContent = "Por favor, preencha este campo.";
    event.preventDefault();
    return false;
  } else {
    msgErro.textContent = "";
    console.log("Formulário enviado com o valor:", nome.value);
    return true;
  }
});
