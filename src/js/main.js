function CalculadoraProcentagem() {
    const Porcentagem = document.getElementById('porcentagem');
    const Valor = document.getElementById('valor');
    const Calcular = document.getElementById('calcular');
    const Resultado = document.getElementById('resultado');

    function calcularResultado() {
        let valor = parseFloat(Valor.value);
        let porcentagem = parseFloat(Porcentagem.value);

        if (isNaN(valor) || isNaN(porcentagem)) {
            Resultado.innerHTML = 'Preencha os campos corretamente';
            return;
        }

        let soma = (porcentagem * valor) / 100;
        Resultado.innerHTML = `O resultado foi ${soma}`;
    }

    // Clicar no botão
    Calcular.addEventListener('click', calcularResultado);

    // Pressionar Enter em qualquer campo
    [Porcentagem, Valor].forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                calcularResultado();
            }
        });
    });
}
CalculadoraProcentagem();