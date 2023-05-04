const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorSaque = Number(form.valorSaque.value);

    if(valorSaque < 10 || valorSaque > 600){
        resultado.textContent = 'Valor inválido! O valor mínimo para saque é de 10 e o máximo é de 600.';
        return;
    }

    let notas100 = Math.floor(valorSaque / 100);
    let notas50 = Math.floor((valorSaque % 100) / 50);
    let notas20 = Math.floor(((valorSaque % 100) % 50) / 20);
    let notas10 = Math.floor((((valorSaque % 100) % 50) % 20) / 10);
    let notas5 = Math.floor(((((valorSaque % 100) % 50) % 20) % 10) / 5);
    let notas2 = Math.floor((((((valorSaque % 100) % 50) % 20) % 10) % 5) / 2);
    let notas1 = Math.floor(((((((valorSaque % 100) % 50) % 20) % 10) % 5) %2) / 1);

    let mensagem = 'Notas de 100: ' + notas100;
    mensagem += '<br>Notas de 50: ' + notas50;
    mensagem += '<br>Notas de 20: ' + notas20;
    mensagem += '<br>Notas de 10: ' + notas10;
    mensagem += '<br>Notas de 5: ' + notas5;
    mensagem += '<br>Notas de 2: ' + notas2;
    mensagem += '<br>Notas de 1: ' + notas1;
    
    resultado.innerHTML = mensagem;    
});

