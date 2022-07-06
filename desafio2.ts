enum Profissao {
    "Atriz",
    "Padeiro"
}

class Pessoa {
    _nome: string;
    _idade: number;
    _profissao: Profissao;

    constructor(nome:string, idade:number, profissao: Profissao) {
        this._nome = nome;
        this._idade = idade;
        this._profissao = profissao;
    }
}

let pessoa1 = new Pessoa('maria',29,Profissao.Atriz)
let pessoa2 = new Pessoa('roberto',19,Profissao.Padeiro)
let pessoa3 = new Pessoa('laura',32,Profissao.Atriz)
let pessoa4 = new Pessoa('carlos',19,Profissao.Padeiro)
