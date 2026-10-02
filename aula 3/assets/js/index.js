function meuEscopo() {
    const formLogin = document.getElementById('formId');
    const formImc = document.getElementById('formImc');
    const containerEscondido = document.querySelector('.container_escondido');
    const caixaResultado = document.querySelector('.caixaResultado');

    function imc(peso, altura) {
        const resultado = peso / (altura * altura);

        console.log(resultado);

        if (resultado < 18.5) {
            return 'Abaixo do peso';
        } else if (resultado < 25) {
            return 'Peso normal';
        } else if (resultado < 30) {
            return 'Sobrepeso';
        } else if (resultado < 35) {
            return 'Obesidade grau I';
        } else if (resultado < 40) {
            return 'Obesidade grau II';
        } else {
            return 'Obesidade grau III';
        }
    }

    // tela do login
    formLogin.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const usuario = formLogin.querySelector('#usuario');
        const senha = formLogin.querySelector('#senha');

        if (usuario.value === 'Sapo123' && senha.value === '1209a') {
            containerEscondido.style.display = 'block';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
    
    // imc calculo
    formImc.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const peso = Number(formImc.querySelector('#peso').value);
        const altura = Number(formImc.querySelector('#altura').value);

        const resultado = imc(peso, altura);

        //resultado

        if (resultado === 'Abaixo do peso') {
            caixaResultado.style.color = '#000000';
            caixaResultado.style.backgroundColor = '#87CEEB';
        } else if (resultado === 'Peso normal') {
            caixaResultado.style.color = '#000000';
            caixaResultado.style.backgroundColor = '#90EE90';
        } else if (resultado === 'Sobrepeso') {
            caixaResultado.style.color = '#000000';
            caixaResultado.style.backgroundColor = '#FFD700';
        } else if (resultado === 'Obesidade grau I') {
            caixaResultado.style.color = '#fff';
            caixaResultado.style.backgroundColor = '#FFA500';
        } else if (resultado === 'Obesidade grau II') {
            caixaResultado.style.color = '#fff';
            caixaResultado.style.backgroundColor = '#dd3a2e';
        } else {
            caixaResultado.style.color = '#fff';
            caixaResultado.style.backgroundColor = '#80041d';
        }

        caixaResultado.querySelector('p').textContent = resultado;
        caixaResultado.style.display = 'block';
    });
}

meuEscopo();
