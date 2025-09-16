const VerResultado = document.getElementById('resultado');
const Modal = document.querySelector('dialog');
const Fechar = document.getElementById('fechar');


VerResultado.addEventListener('click', ()=>{
    Modal.show()
})

Fechar.addEventListener('click', ()=>{
    Modal.close()
})