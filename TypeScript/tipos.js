"use strict";
//https://www.typescriptlang.org/docs/handbook/basic-types.html
//https://www.typescriptlang.org/docs/handbook/advanced-types.html
//Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = 'Vitor farias';
//Array
var idades = [23, 18, 35];
var nomes = ['oi', 'tchau'];
//usando interface Array, dentro vai o tipo do parametro
var idades2 = [10, 20, 30];
var idades3 = [{ oi: 'oi' }];
//Tuple
var jogadores;
jogadores = ['Clay', 10, true];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any - quando nao sabe o tipo
var retornoDaAPI = [123, 'Vitor', false];
var retorno2 = {};
//Void -- utilizado em função quando não retorna nada
function printMensagem(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(object) {
    //...
}
criar({ propriedade: 1 });
//Never - coisas que nunca ocorrem -- utiliza p erro tamebem
function loopInfinito() {
    while (true) { }
}
function erro(msg) {
    throw new Error(msg);
}
function falha() {
    return erro('olá erro');
}
//Union types  - pode ter um tipo ou outro
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota(10);
exibirNota('oi');
//type Funcionarios = Array<Funcionario;
var funcionarios = [
    { nome: 'clay', sobrenome: 'jorge', dataNascimento: new Date() },
    { nome: 'pedro', sobrenome: 'jorge', dataNascimento: new Date() },
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario:', funcionario.nome);
    }
}
tratarFuncionarios(funcionarios);
//valores nulos ou opcionais usando ? vira opcional
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Vitor',
    telefone1: '12393466',
};
//type Assertion
var minhaIdade = 23;
minhaIdade.toString(); // comeca a enteder apartir desse momento
var input = document.getElementById('nuemro1'); // type assertion que é um inputElement
console.log(input.value);
var input2 = document.getElementById('nuemro2'); // type assertion que é um inputElement
console.log(input2.value);
