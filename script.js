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


// Declaração (Statement)
function minhaFuncao(param1) {
    console.log("Executa uma ação");
}
if (1 !== 2) {
    console.log("Um IF é uma declaração");
}
console.log(minhaFuncao);

// Expressão (Expression)
var minhaOutraFuncao = function(param1) {
    console.log("Executa outra ação");
}
console.log(minhaOutraFuncao);

// Uma soma é uma expressão
var soma = 5 + 7;
console.log("Valor armazenado na variável 'soma': " + soma);

var arrJogadores = ['Ricardo', 'Monica', 'Leonardo'];
var arrAnoNascimento = new Array(1998, 1975, 1991);
var arrPontos = [45, 117, 78];
arrPontos[1] = 71;
console.log(arrJogadores);
console.log(arrJogadores[1] + ' tem ' + arrPontos[1] + ' pontos.');

///

// new Array(nome jogador, ano nascimento, pontos)
var arrRicardo = new Array('Ricardo', 1998, 45);
var arrMonica = new Array('Monica', 1975, 71);
var arrLeonardo = new Array('Leonardo', 1991, 78);
var arrJogadores = new Array(arrRicardo, arrMonica, arrLeonardo);
console.log(arrJogadores);

/

var arrPrato = new Array('Arroz', 'Tomate', 'Alface');
arrPrato.push('Feijão');
console.log(arrPrato);


//var arrEmenta = new Array('Matemática', 'Artes', 'Francês');
//arrEmenta.unshift('Português');
//console.log(arrEmenta);

//var arrEmenta = new Array('Matemática', 'Artes', 'Francês');
//arrEmenta.unshift('Português');
//arrEmenta.pop();
//console.log(arrEmenta);

//var arrMedicos = new Array('Dr. Barcelos', 'Dra. Fernanda');
//arrMedicos.shift();
//console.log(arrMedicos);

var arrPrato = new Array('Arroz', 'Tomate', 'Alface');
arrPrato.push('Feijão');
if (arrPrato.indexOf('Arroz') !== -1) {
    arrPrato.shift();
}
console.log(arrPrato);



///script.js
var objetoCarro = {
    modelo: '147',
    numeroVidros: 4,
    marca: 'Fiat',
    numeroPortas: 2
}

var objetoCasa = new Object();
objetoCasa.numeroComodos = 5;
objetoCasa.valorImovel = 523000.320;
objetoCasa['aluguel'] = false;
objetoCasa['venda'] = true;
//3
objetoCarro.numeroPortas = 4;
var umIdentificadorDaCasa = 'valorImovel';

console.log(objetoCarro);
console.log(objetoCarro.modelo);
console.log(objetoCasa['numeroComodos']);
console.log(objetoCasa[umIdentificadorDaCasa]);



var carro = {
    extras: ['ar-condicionado', 'freios abs', 'som'],
    velocidade: 0,
    faroisLigados: false,
    ligarFarios: function() {
        this.faroisLigados = true;
    },
    acelerar: function(velocidade) {
        this.velocidade += velocidade;
    },
    freiar: function() {
        this.velocidade = 0;
    }
}
carro.ligarFarios();
console.log('Farois ligados: ' + carro.faroisLigados);
carro.acelerar(50);
console.log('Velocidade: ' + carro.velocidade);
carro.freiar();
console.log('Velocidade: ' + carro.velocidade);



//script.js
// for (contador; condição; incremento) {
//for (var i = 0; i < 10; i++) {
//  console.log(i);
//}

///script.js
var nomes = ['João', 'Maria', 'Aurora', 'Branca', 'Melevola'];

for (var i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}



//script.js
var nomes = ['Soluço', 'Astrid', 'Melequento', 'Perna de peixe', 'Bocão'];
var nomePesquisado = null;
var i = 0;
while (nomePesquisado == null && i < nomes.length) {
    if (nomes[i] == 'Melequento') {
        nomePesquisado = nomes[i];
    } else {
        console.log(nomes[i] + ' não é o nome pesquisado');
    }
    i++;
}
console.log('Nome encontrado ' + nomePesquisado);

*/

var animaisMarinhos = ['peixe', 'baleia', 'golfinho', 'tubarão', 'lula'];
for (var i = 0; i < animaisMarinhos.length; i++) {
    if (animaisMarinhos[i] == 'tubarão') {
        console.log(animaisMarinhos[i] + ' encontrado.');
        break;
    } else {
        console.log('Procurar animal marinho.');
    }
}