// Array com os produtos da loja
const produtos = [
    {
        Produto: "Mouse Logitech",
        Preco: 300.00,
        Categoria: "mousesGamer",
        Disponibilidade: true
    },

    {
        Produto: "Mouse Razer",
        Preco: 400.00,
        Categoria: "mousesGamer",
        Disponibilidade: true
    },

    {
        Produto: "Mouse Corsair",
        Preco: 500.00,
        Categoria: "mousesGamer",
        Disponibilidade: false
    },

    {
        Produto: "Mouse HyperX",
        Preco: 600.00,
        Categoria: "mousesGamer",
        Disponibilidade: true
    },

    {
        Produto: "Teclado Logitech",
        Preco: 400.00,
        Categoria: "teclados",
        Disponibilidade: true
    },

    {
        Produto: "Teclado Razer",
        Preco: 500.00,
        Categoria: "teclados",
        Disponibilidade: true
    },

    {
        Produto: "Teclado Corsair",
        Preco: 600.00,
        Categoria: "teclados",
        Disponibilidade: false
    },

    {
        Produto: "Teclado HyperX",
        Preco: 700.00,
        Categoria: "teclados",
        Disponibilidade: true
    },

    {
        Produto: "Monitor LG",
        Preco: 1500.00,
        Categoria: "monitores",
        Disponibilidade: true
    },

    {
        Produto: "Monitor Samsung",
        Preco: 2000.00,
        Categoria: "monitores",
        Disponibilidade: false
    },

    {
        Produto: "Monitor Dell",
        Preco: 2500.00,
        Categoria: "monitores",
        Disponibilidade: true
    },

    {
        Produto: "Monitor AOC",
        Preco: 3000.00,
        Categoria: "monitores",
        Disponibilidade: true
    }]

// Associando os elementos HTML com o JS
const btnMostrar = document.getElementById('btnMostrar');
const form = document.getElementById('form');
const inputCategoria = document.getElementById('categoria');
const inputDisponibilidade = document.getElementById('disponibilidade');

// Adicionando o evento de click no botão
btnMostrar.addEventListener('click', function (event) {
    event.preventDefault();

    // Limpa a tela removendo os elementos da classe 'produto', criados em uma execução anterior
    const elementos = document.querySelectorAll('.produto');
    elementos.forEach(function(elemento) {
        elemento.remove();
    });

    // Recebendo os valores / Declarando as variáveis
    let categoria = inputCategoria.value;
    let btnDispo = inputDisponibilidade.checked;
    let produtosDispo = produtos;

    if (btnDispo === true) {
        produtosDispo = produtos.filter( function (produto) {
            return produto.Disponibilidade === true;
        });
    }

    // Lógica para mostrar os produtos de acordo com o filtro aplicado
    for (let i = 0; i < produtosDispo.length; i++) {
        if (categoria === produtosDispo[i].Categoria || categoria === "todos") {
            let div = document.createElement("DIV");
            div.innerHTML = `${produtosDispo[i].Produto} - R$${produtosDispo[i].Preco}</br>`
            div.className = 'produto';
            div.id = `produto ${i}`;
            
            document.body.appendChild(div);
        }
    }
});
