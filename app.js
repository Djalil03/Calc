const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')

const plus = document.querySelector('#plus')
const min = document.querySelector('#min')
const umn = document.querySelector('#umn')
const del = document.querySelector('#del')

const output = document.querySelector('#output')

function numsF () {
    const val1 = +num1.value
    const val2 = +num2.value

    return [val1, val2]
}

function pl() {
    const p = numsF()

    const result = p[0] + p[1]

    resOut(result)
}

function mi() {
    const p = numsF()

    const result = p[0] - p[1]
    
    resOut(result)
}

function um() {
    const p = numsF()

    const result = p[0] * p[1]
    
    resOut(result)
}

function de() {
    const p = numsF()

    const result = p[0] / p[1]
    
    resOut(result)
}

function resOut(result) {
    output.innerHTML = `Результат: ${result}`
}

plus.addEventListener('click', pl)
min.addEventListener('click', mi)
umn.addEventListener('click', um)
del.addEventListener('click', de)