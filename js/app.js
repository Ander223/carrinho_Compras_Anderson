

function adicionar(){

  //recebendo os produtos, valores, valores e quantidade de cada produto

  let produto = document.getElementById('produto').value;  // recuperando o value que esta no produto 
  let nomeProduto = produto.split('-')[0]; // quebrando a string com a função split e pegando a parte que esta na posição zero da string separada por traço
  let valor = produto.split('R$')[1]; // quebrando a string com a função split e pegando a parte que esta na posição UM da string separada por R$
  let quantidade = document.getElementById('quantidade').value; // recuperando a quantidade 
  
  // fazendo o calculo dos produtos
  let subTotal =  quantidade * valor;

  // adicionar os produtos no carrinho de compra

  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML =`<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span></section>`;



 /* 
alert(nomeProduto);
alert(valor);
alert(quantidade);
alert(subTotal);
*/

}

function limpar(){


}