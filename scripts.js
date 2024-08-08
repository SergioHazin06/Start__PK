// Carregar produtos dinamicamente na página de produtos
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('produtos-lista')) {
        loadProducts();
    }
    
    // Manipular formulário de cadastro
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Endereço cadastrado com sucesso!');
            formCadastro.reset();
        });
    }
    
    // Manipular formulário de pagamento
    const formPagamento = document.getElementById('form-pagamento');
    if (formPagamento) {
        formPagamento.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Pagamento realizado com sucesso!');
        });
    }
});

function loadProducts() {
    const produtos = [
        { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 'R$ 99,90', imagem: 'produto1.jpg' },
        { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 'R$ 79,90', imagem: 'produto2.jpg' },
        { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 'R$ 89,90', imagem: 'produto3.jpg' },
        // Adicione mais produtos conforme necessário
    ];
    
    const produtosLista = document.getElementById('produtos-lista');
    
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <div class="preco">${produto.preco}</div>
            <a href="#" class="btn">Adicionar ao Carrinho</a>
        `;
        produtosLista.appendChild(produtoDiv);
    });
}
