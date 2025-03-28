const lista = document.getElementById('lista');
const btnEmbaralhar = document.getElementById('button-embaralhar');
const itensLista = Array.from(lista.children);

function embaralharLista(lista) {
    let currentIndex = lista.length;
    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [lista[currentIndex], lista[randomIndex]] = [lista[randomIndex], lista[currentIndex]];
    }

    return lista;
}

btnEmbaralhar.addEventListener('click', function() {
    const listaEmbaralhada = embaralharLista([...itensLista]);

    lista.innerHTML = '';
    listaEmbaralhada.forEach(item => {
        lista.appendChild(item);
    });
});