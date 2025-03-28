const olimpo = document.getElementById('olimpo');
const imgInicial = '/img/download.jpg';
const mudarImg = '/img/Acampamento_Meio-Sangue.webp'

olimpo.addEventListener('mouseover', function(){
    olimpo.src = mudarImg;
});

olimpo.addEventListener('mouseout', function(){
    olimpo.src = imgInicial;
});