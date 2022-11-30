

function insert(num) {
    let numero = document.querySelector('.tela').innerHTML
    document.querySelector('.tela').innerHTML = numero + num
    
}

function limpar() {
    document.querySelector('.tela').innerHTML = ''
}

function apagar() {
    let back = document.querySelector('.tela').innerHTML
    document.querySelector('.tela').innerHTML = back.substring(0, back.length - 1)
}

function calcular() {
    let resultado = document.querySelector('.tela').innerHTML
    if (resultado) {
        document.querySelector('.tela').innerHTML = eval(resultado)

    }


}

