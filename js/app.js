
let totalGeral;
document.getElementById('lista-produtos').innerHTML= '';
document.getElementById('valor-total').innerHTML='0';

function adicionar(){

  //recebendo os produtos, valores, valores e quantidade de cada produto

  let produto = document.getElementById('produto').value;  // recuperando o value que esta no produto 
  let nomeProduto = produto.split('-')[0]; // quebrando a string com a função split e pegando a parte que esta na posição zero da string separada por traço
  let valor = produto.split('R$')[1]; // quebrando a string com a função split e pegando a parte que esta na posição UM da string separada por R$
  let quantidade = document.getElementById('quantidade').value; // recuperando a quantidade 
  let subTotal = quantidade * valor;

  // adicionar os produtos no carrinho de compra

  let carrinho = document.getElementById('lista-produtos'); //recupera o carrinho
  carrinho.innerHTML =`<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span></section>`;
            // inseri a quantidade, valor unitario e o produto no carrinho

  // fazendo o calculo dos produtos do carrinho

  totalGeral = subTotal;

  let valorTotal = document.getElementById('valor-total');
  valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`; // exibe o valor total na pagina 








 /* 
alert(nomeProduto);
alert(valor);
alert(quantidade);
alert(subTotal);
*/

}

function limpar(){


}