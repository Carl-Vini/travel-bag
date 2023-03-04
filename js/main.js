const form = document.getElementById('novoItem'); 
const lista = document.getElementById('lista');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.elements['nome'].value);
    console.log(event.target.elements['quantidade'].value);
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

    criaElemento(nome.value,quantidade.value );

    nome.value = "";
    quantidade.value = "";


}) 

function criaElemento(nome, quantidade) {           
    console.log(nome);
    console.log(quantidade);

    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;
    
    lista.appendChild(novoItem);

    localStorage.setItem('nome', nome);
    localStorage.setItem('quantidade', quantidade);
}