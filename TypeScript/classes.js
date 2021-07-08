"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    // private mes: number;//privado
    //mes: number;
    //ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2020);
console.log(data.dia);
//console.log(data.mes)//privado só dentro da classe pode acessar
var data2 = new Data(1, 1);
console.log(data2);
//colocando modificar public no constructor o proprio java script cria o .this
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-10);
    };
    return Carro;
}());
var carro = new Carro('Crevrolet', 'mazda', 500);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();
console.log(carro);
//herança
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, 'Chevrolet', 'Camaro', 300) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
        this.acelerar();
    };
    return Camaro;
}(Carro));
var camaro = new Camaro();
camaro.acelerar();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
camaro.ligarTurbo();
console.log(camaro);
