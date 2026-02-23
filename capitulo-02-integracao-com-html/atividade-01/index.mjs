import "./styles.css";

function promocao() {
  // Variáveis para buscar as ids no HTML
  let inMedicamento = document.getElementById("inMedicamento");
  let inPreco = document.getElementById("inPreco");
  let outPromocao = document.getElementById("outPromocao");

  // Criando variáveis para usar nos calculos
  let medicamento = inMedicamento.value;
  let preco = Number(inPreco.value);

  // Processamento do cálculo da promoção
  let promocao = Math.floor(preco) * 2;

  // exibição do que processado
  outPromocao.textContent =
    "Promoção de " +
    medicamento +
    "\nLeve 2 dois por apenas R$ " +
    promocao.toFixed(2);
}

// Configuração do botão
let btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", promocao);

/*
    Linha 14 (uso do Math.floor()):
        Como a atividade pediu que desse um desconto nos
        centavos, então decidi usar o Math.floor() para
        arredondar os valor depois do ponto para baixo,
        ou seja, zero. Com isso conseguimos satisfazer uma
        das condições pedidas no exercício.
*/
