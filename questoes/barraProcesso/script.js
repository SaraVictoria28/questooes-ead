const bar = document.querySelector('.bar')
const progress = document.querySelector('.progress')
const btnReset = document.querySelector('.reset')

let width = 1;

setInterval(function(){
    width++;
    if(width <=100){
        progress.style.width = width + '%'
        progress.textContent = width;
    }
}, 50)

btnReset.addEventListener('click', function(){
    width=0;
    progress.style.width = width + '%'
    progress.textContent = width;
})