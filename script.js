///console.log("That's All Folks");



/* 
var nomeDaVariavel = "valor da variável";
var outraVariavel = 'valor da outra variável';
var variavelIdade = 22;
var variavelTenhoCabeloBranco = false;

var variavelIndefinida;
console.log(nomeDaVariavel);
console.log(outraVariavel);
console.log(variavelIdade);
console.log(variavelTenhoCabeloBranco);
console.log(variavelIndefinida);
console.log(variavelNula);

arquivo 3 school abaixo 

https://www.w3schools.com/tags/


var variavelTexto = "texto";
var variavelNumero1 = 23;
var variavelNumero2 = 11;
//04
console.log(variavelTexto + variavelNumero2);
console.log(variavelNumero1 + variavelNumero2);
var variavel = "valor inicial";

console.log(variavel);
variavel = "novo valor";
console.log(variavel);
var variavel;
variavel = prompt("Informe um valor para esta variável");
alert(variavel);



var somaESubtracao = 5 + 5 - 7;
var subtracaoEMultiplicacao = 30 - 15 * 2;
var multiplicacaoEExponenciacao = 2 * 3 ** 2;
var agrupamentoEDivisao = (22 - 2) / 4;

console.log(somaESubtracao);
console.log(subtracaoEMultiplicacao);
console.log(multiplicacaoEExponenciacao);
console.log(agrupamentoEDivisao);

//script.js
var numeroMacas = 4;
var todasAsMacasSaoVerdes = false;
if (numeroMacas > 1 && todasAsMacasSaoVerdes === true) {
    console.log("Temos mais de uma maçã e todas as maçãs são verdes.");
} else {
    console.log("Ou não temos mais de uma maçã ou nem todas são verdes.");
}

var numeroCarros = 6;
var todosCarrosMesmaMarca = false;

if (numeroCarros === 5 || todosCarrosMesmaMarca === true) {
    console.log("Ou todos os carros são da mesma marca.");
    console.log("Ou temos cinco carros.");
    console.log("Ou as duas coisas juntas.");
} else {
    console.log("Não temos cinco carros e nem todos são da mesma marca.");
}


var nome = "Ricardo";
var idade = 21;
var estaSolteiro = true;
if (estaSolteiro === true) { // retorno da decisão true
    console.log(nome + " está solteiro!");
} else { // se retorno da decisão for false
    console.log(nome + " está casado!");
}


var variavel1 = 53;
var variavel2 = true;

var variavelTexto = "zero";
var variavelNumero = "24";
var variavelLogica = false;
var variavelCurta = "texto curto";
if (variavel2 && variavelNumero == 24) { // retorno da decisão true
    console.log("Retorno verdadeira");
} else { // se retorno da decisão for false
    console.log("Retorno falso");
}

if (variavel1 > 50) { console.log(variavel1 + " é maior que 50"); }
if (variavelTexto != "um") { console.log(variavelTexto + " é diferente de um"); }
if (!variavelLogica) { console.log("Negação da variável lógica é verdadeira"); }
if (variavelTexto != variavel1) { console.log("Valor das variáveis é diferente"); }


var variavelCoercao = 37;

var variavelSemCoercao = 37;
if (variavelCoercao == "37") {
    console.log("Comparação com coerção.");
}
if (variavelSemCoercao === "37") {
    console.log("Este trecho não será esecutado, sem coerção.");
}



var numeroPassageiros = 23;

if (numeroPassageiros === 0) {
    console.log("O transporte está vazio.");
} else if (numeroPassageiros > 0 && numeroPassageiros < 50) {
    console.log("O transporte tem passageiros.");
} else {
    console.log("O transporte está lotado.");
}

var nome = "Michele";
var emprego = "desenvolvedor";

switch (emprego) {
    case "policial":
        console.log(nome + " é uma policial.");
        break;
    case "cozinheiro":
        console.log(nome + " é uma cozinheira.");
        break;
    case "desenvolvedor":

        console.log(nome + " é uma desenvolvedora");
        break;
    case "lutador":
        console.log(nome + " é uma lutadora.");
        break;
    default:
        console.log(nome + " trabalha em outra coisa.");
}

function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2018 - anoDeNascimento;
    if (idade >= 18) {
        return nomePessoa + " é maior de idade.";
    } else {
        return nomePessoa + " tem menos de 18 anos.";
    }
}

var nome = "Joana";
var nascimento = 2002;
console.log(verificarIdade(nome, nascimento));

console.log(verificarIdade("Cassiano", 1988));

nome = "John";
nascimento = 1978;
var texto = verificarIdade(nome, nascimento);
console.log(texto);

*/
function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2018 - anoDeNascimento;
    if (idade >= 18) {
        console.log(nomePessoa + " é maior de idade.");
    } else {
        console.log(nomePessoa + " tem menos de 18 anos.");
    }
}

var nome = "Joana";
var nascimento = 2002;
verificarIdade(nome, nascimento);

verificarIdade("Cassiano", 1988);

nome = "John";
nascimento = 1978;
verificarIdade(nome, nascimento);