const form = document.getElementById('novoItem'); 
const lista = document.getElementById('lista');

const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((element) => {
    criaElemento(element);
})

console.log(itens);
form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

    const itemAtual = {
        'nome': nome.value,   
        'quantidade': quantidade.value
    }

    const existe = itens.find(element => element.nome === nome.value);

    if(existe){
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
    } else {
        itemAtual.id = itens.length;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }
    
    localStorage.setItem('itens',JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";  

}) 

function criaElemento(item) {           
    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;
    
    lista.appendChild(novoItem); 
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}