const botaoExibir = document.getElementById('button-data-hora');
const paragrafoDataHora = document.getElementById('dataHoraAtual');

botaoExibir.addEventListener('click', function() {
    const agora = new Date();
    const data = agora.toLocaleDateString();
    const hora = agora.toLocaleTimeString();
    paragrafoDataHora.textContent = `Data: ${data} - Hora: ${hora}`;
});