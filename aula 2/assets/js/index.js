function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /*form.onsubmit = function (evento) {
        evento.preventDefault();
        alert('atualizada');
        console.log('foi enviado');
    };*/

    const pessoas = [];

    function criaPessoa (nome, sobrenome, peso, altura) {
        return (nome, sobrenome, peso, altura)
    }

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}kg ${altura.value}m</p>`;
        console.log(pessoas.length)
    }


    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();