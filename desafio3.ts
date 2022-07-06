// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar: HTMLElement|null = document.getElementById('atualizar-saldo');
let botaoLimpar: HTMLElement|null = document.getElementById('limpar-saldo');
let soma: HTMLElement|null = document.getElementById('soma');
let campoSaldo: HTMLElement|null = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma:number): void {
    campoSaldo.innerHTML += soma;
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function (): void {
    somarAoSaldo(soma?.TEXT_NODE || 0);
});

botaoLimpar.addEventListener('click', function ():void {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
