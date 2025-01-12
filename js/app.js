let valorTotal = 1400
function adicionar() {
    let produto = document.getElementById('produto').value;
    let listaProduto = produto.split('-');
    let valorProduto = apenasNumeros(produto);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let nomeProduto = listaProduto[0];
    
    if (quantidade >= 1) {
        let novoProduto = document.createElement('section');
    novoProduto.className = 'carrinho__produtos__produto';
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`
    
    let listaProdutos = document.getElementById('lista-produtos');
    console.log(listaProdutos.contains(novoProduto));
    listaProdutos.appendChild(novoProduto);
    console.log(listaProdutos.contains(novoProduto));

    let Total = document.getElementById('valor-total');
    Total.innerHTML = `<span class="texto-azul" id="valor-total">R$${(quantidade * valorProduto) + valorTotal}</span>`;
    valorTotal = valorTotal + (valorProduto * quantidade);

    //console.log(produto);
    //console.log(valorProduto);
    //console.log(quantidade);
    //console.log(nomeProduto);
    } else {
        
    alert('Favor informar uma quantidade!');
    }
}

function limpar() {
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''
    let Total = document.getElementById('valor-total');
    Total.innerHTML = `<span class="texto-azul" id="valor-total">R$${0}</span>`;
    valorTotal = 0

}

function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}
