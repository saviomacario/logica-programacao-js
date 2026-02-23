import "./styles.css";

/* 
    O programa deve ler o valor de cada 15 minutos de uso de um computador 
    e o tempo de uso por um cliente em minutos. Informe o valor a ser pago
    pelo cliente, sabendo que as fraçoes extras de 15 minutos devem ser
    cobradas de forma integral.
*/

function valorPorMinuto() {
  let inValorMin = document.getElementById("inValorMin");
  let inTempoUso = document.getElementById("inTempoUso");
  let outValor = document.getElementById("outValor");

  let valorMinuto = Number(inValorMin.value);
  let tempoUso = Number(inTempoUso.value);

  let bloco = Math.ceil(tempoUso / 15);
  let valor = bloco * valorMinuto;

  outValor.textContent =
    "Valor a pagar por tempo de uso é R$ " + valor.toFixed(2);
}

let btMostrarValor = document.getElementById("btMostrarValor");
btMostrarValor.addEventListener("click", valorPorMinuto);

/*
  1º observação:
  A grande sacada dessa questão foi o uso do Math.ceil() onde caso o número 
  inserido dentro dessa função tenha uma casa decimal ele arrendonda sua 
  resposta para o valor inteiro acima.
  
  2º observação:
  Outtra coisa que não consegui entender tão bem no enunciado da questão foi 
  ele iria separar em blocos de 15 minutos para facilitar o raciocio da 
  questão, ou seja, 15 minutos = 1 bloco de tempo, 30 minutos = 2 blocos,
  35 minutos =  2.3 blocos, mas aqui no caso do 35 minutos que resultou
  no 2.3 usariamos o Math.ceil() para arrendondar para 3 e assim calcular.
  
  3º observação:
  Ter sempre bastante cuidado e atenção nas ids atribuídas porque e como e onde
  irá colocar elas durante seu código!
  */
