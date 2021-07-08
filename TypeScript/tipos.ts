//https://www.typescriptlang.org/docs/handbook/basic-types.html
//https://www.typescriptlang.org/docs/handbook/advanced-types.html

//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = 'Vitor farias';

//Array
const idades: number[] = [23, 18, 35];
const nomes: string[] = ['oi', 'tchau'];
//usando interface Array, dentro vai o tipo do parametro
const idades2: Array<number> = [10, 20, 30];
const idades3: object[] = [{ oi: 'oi' }];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ['Clay', 10, true];

//Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003',
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any - quando nao sabe o tipo
const retornoDaAPI: any[] = [123, 'Vitor', false];
const retorno2: any = {};

//Void -- utilizado em função quando não retorna nada
function printMensagem(msg: string): void {
  console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(object: object) {
  //...
}
criar({ propriedade: 1 });

//Never - coisas que nunca ocorrem -- utiliza p erro tamebem

function loopInfinito(): never {
  while (true) {}
}

function erro(msg: string): never {
  throw new Error(msg);
}

function falha() {
  return erro('olá erro');
}

//Union types  - pode ter um tipo ou outro
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}
exibirNota(10);
exibirNota('oi');

//Alias - criando seu proprio type
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

//type Funcionarios = Array<Funcionario;

const funcionarios: Funcionario[] = [
  { nome: 'clay', sobrenome: 'jorge', dataNascimento: new Date() },
  { nome: 'pedro', sobrenome: 'jorge', dataNascimento: new Date() },
];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionario:', funcionario.nome);
  }
}
tratarFuncionarios(funcionarios);

//valores nulos ou opcionais usando ? vira opcional

let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; //opcional
};

const contato: Contato = {
  nome: 'Vitor',
  telefone1: '12393466',
};

//type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString(); // comeca a enteder apartir desse momento

const input = document.getElementById('nuemro1') as HTMLInputElement; // type assertion que é um inputElement
console.log(input.value);

const input2 = <HTMLInputElement>document.getElementById('nuemro2'); // type assertion que é um inputElement
console.log(input2.value);
