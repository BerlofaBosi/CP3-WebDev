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
    }
];

// Associando os elementos HTML com o JS
const btnMostrar = document.getElementById('btnMostrar');
const inputCategoria = document.getElementById('inputCategoria');
const inputDisponibilidade = document.getElementById('disponibilidade');
const ordenarPreco = document.getElementById('ordenarPreco');
const produtosContainer = document.getElementById('produtosContainer');
const btnTodos = document.getElementById('btnTodos');

// Botão para mostrar tudo sem filtro
btnTodos.addEventListener('click', function (event) {
    event.preventDefault();

    const produtosContainer = document.getElementById('produtosContainer');

    // Limpa os produtos antes de mostrar tudo
    produtosContainer.innerHTML = '';

    // Agrupando e exibindo
    const categoriasAgrupadas = {};

    produtos.forEach(function (produto) {
        if (!categoriasAgrupadas[produto.Categoria]) {
            categoriasAgrupadas[produto.Categoria] = [];
        }
        categoriasAgrupadas[produto.Categoria].push(produto);
    });

    for (let categoria in categoriasAgrupadas) {
        let titulo = document.createElement('h3');
        titulo.textContent = categoria.toUpperCase();
        produtosContainer.appendChild(titulo);

        categoriasAgrupadas[categoria].forEach(function (produto, i) {
            let div = document.createElement('div');
            div.innerHTML = `${produto.Produto} - R$${produto.Preco.toFixed(2)}`;
            div.className = 'produto';
            div.id = `produto${i}`;

            produtosContainer.appendChild(div);
        });
    }
});



// Botão para mostrar os produtos filtrados
btnMostrar.addEventListener('click', function (event) {
    event.preventDefault();

    // Limpa a tela removendo os elementos da classe 'produto' e os títulos de categoria (h3)
    const elementos = document.querySelectorAll('.produto, h3');
    elementos.forEach(function(elemento) {
    elemento.remove();
    });

    // Recebendo os valores / Declarando as variáveis
    let categoriaSelecionada = inputCategoria.value;
    let somenteDisponivel = inputDisponibilidade.checked;
    let ordenacao = ordenarPreco.value;

    let produtosFiltrados = produtos;

    if (somenteDisponivel === true) {
        produtosFiltrados = produtosFiltrados.filter(function (produto) {
            return produto.Disponibilidade === true;
        });
    }

    if (categoriaSelecionada !== "todos" && categoriaSelecionada !== "") {
        produtosFiltrados = produtosFiltrados.filter(function (produto) {
            return produto.Categoria === categoriaSelecionada;
        });
    }

    // Complementos
    if (ordenacao === "men") {
        produtosFiltrados.sort((a, b) => a.Preco - b.Preco);
    } else if (ordenacao === "mai") {
        produtosFiltrados.sort((a, b) => b.Preco - a.Preco);
    }

    const categoriasAgrupadas = {};

    produtosFiltrados.forEach (function (produto) {
        if (!categoriasAgrupadas[produto.Categoria]) {
            categoriasAgrupadas[produto.Categoria] = [];
        }
        categoriasAgrupadas[produto.Categoria].push(produto);
    });

    for (let categoria in categoriasAgrupadas) {
        let titulo = document.createElement('h3');
        titulo.textContent = categoria.toUpperCase();
        produtosContainer.appendChild(titulo);

        categoriasAgrupadas[categoria].forEach(function (produto, i) {
            let div = document.createElement('div');
            div.innerHTML = `${produto.Produto} - R$${produto.Preco.toFixed(2)}`;
            div.className = 'produto';
            div.id = `produto${i}`;

            produtosContainer.appendChild(div);
        });
    }
});
