function CalculadoraProcentagem() {
    const Porcentagem = document.getElementById('porcentagem');
    const Valor = document.getElementById('valor');
    const Calcular = document.getElementById('calcular');
    const Resultado = document.getElementById('resultado');

    Calcular.addEventListener('click', () => {
        let valor = parseFloat(Valor.value);
        let porcentagem = parseFloat(Porcentagem.value)

        if (isNaN(valor) || isNaN(porcentagem)) {
            Resultado.innerHTML = 'Preencha os campos corretamente'
            return
        }

        let soma = (porcentagem * valor) / 100

        Resultado.innerHTML = `O resultado foi ${soma}`
    });
}
CalculadoraProcentagem()