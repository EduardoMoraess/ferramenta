function Produtor1(){
    const verresultado = document.getElementById('resultado');
    const fechar = document.getElementById('fechar');
    const Modal = document.querySelector('dialog');

    verresultado.addEventListener('click', ()=>{
        Modal.show()
    })

    fechar.addEventListener('click', ()=>{
        Modal.close()
    })
}
Produtor1()

function Produtor2(){}

function Produtor3(){}