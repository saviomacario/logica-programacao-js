import "./styles.css";

/*
    Para aumentar suas vendas no setor de higiene, cada etiqueta de 
    produto deve exibir uma mensagem anunciando 50% de desconto 
    (para um item) na compra de três unidades de produto. Elaborar um
    programa que leia descrição e preço de um produto. Após, apresente
    as mensagens indicando a promoção.
*/

function mostrarPromocao() {

  // Entrada de dados pegando do HTML
  let inProduto = document.getElementById("inProduto");
  let inPreco = document.getElementById("inPreco");
  let outPromocao = document.getElementById("outPromocao");

  // Variáveis para pegar somente os valores das entradas de dados
  let produto = inProduto.value;
  let preco = Number(inPreco.value);

  // Processamento de dados
  let calcPromocao = preco + preco + preco * 0.5;
  let promocao = preco * 0.5;

  // Saída de dados
  outPromocao.textContent = `${produto} promoção: Leve 3 por R\$: ${calcPromocao.toFixed(
    2
  )}\nO 3ºproduto custa apenas R\$: ${promocao.toFixed(2)}`;
}

// Botão que libera a saída de dados do processamento
let btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao);
