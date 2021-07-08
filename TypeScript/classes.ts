class Data {
  public dia: number; //default public
  // private mes: number;//privado
  //mes: number;
  //ano: number;

  constructor(dia: number, public mes: number, public ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
//console.log(data.mes)//privado só dentro da classe pode acessar

const data2 = new Data(1, 1);
console.log(data2);

//colocando modificar public no constructor o proprio java script cria o .this

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-10);
  }
}

const carro = new Carro('Crevrolet', 'mazda', 500);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.acelerar();
carro.frear();

console.log(carro);

//herança

class Camaro extends Carro {
  private turbo = false;

  constructor() {
    super('Chevrolet', 'Camaro', 300);
  }

  ligarTurbo() {
    this.turbo = true;
    this.acelerar();
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
camaro.ligarTurbo();

console.log(camaro);
