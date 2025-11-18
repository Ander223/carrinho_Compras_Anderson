
let totalGeral;
limpar();
 


function adicionar(){

  //recebendo os produtos, valores, valores e quantidade de cada produto

  let produto = document.getElementById('produto').value;  // recuperando o value que esta no produto 
  let nomeProduto = produto.split('-')[0]; // quebrando a string com a função split e pegando a parte que esta na posição zero da string separada por traço
  let valor = produto.split('R$')[1]; // quebrando a string com a função split e pegando a parte que esta na posição UM da string separada por R$
  let quantidade =document.getElementById('quantidade').value; // recuperando a quantidade 

  if ((quantidade == 0)||(quantidade == '')){  // faz o controle para não deixar a quantidade vazia

    alert('Digite uma quantidade válida!'); 
  } else{

  
  // calcula o valor e subtotal
  let subTotal = quantidade * valor;

  // adicionar os produtos no carrinho de compra

  let carrinho = document.getElementById('lista-produtos'); //recupera o carrinho
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span></section>`;
            // inseri a quantidade, valor unitario e o produto no carrinho
            // carrinho.innerHTML = carrinho.innerHTML para que o que foi inserido no carrinho anteriormente fique no carrinho junto com o novo produto

  // fazendo o calculo do total de produtos do carrinho

  totalGeral = totalGeral + subTotal; // recebe o subtotal + totalGeral que já tinha quando colocou um produto anteriomente e atribui ao total geral

  let total = document.getElementById('valor-total');
  total.textContent = `R$ ${totalGeral}`; // exibe o valor total na pagina. Como a tag é um <p> pode ser utilizado o textContent
  quantidade = document.getElementById('quantidade').value = 0;

  }

 }

function limpar(){

totalGeral=0;
document.getElementById('lista-produtos').innerHTML= ''; // colocado esta innerhtml com espaço vazio para limpar o crrinho de compra no inicio
document.getElementById('valor-total').innerHTML='0'; // colocado esta innerhtml para zerar o valor total quando iniciar a compra pela primeira vez 

}