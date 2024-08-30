const name = document.getElementById('nome')
const weight = document.getElementById('peso')
const height = document.getElementById('altura')
const result = document.querySelector('p')

function calculaIMC() {
    const imc = weight.value/(height.value*height.value)
    //result.innerHTML = imc

    if (imc < 18.5){
        result.innerHTML = `${name.value} seu imc é ${Math.round(imc)} e sua classificação é Magreza`
    } else if (imc >= 18.5 && imc <=24.9){
        result.innerHTML = `${name.value} seu imc é ${Math.round(imc)} e sua classificação é Normal`
    } else if (imc >= 25 && imc <= 29.9){
        result.innerHTML = `${name.value} seu imc é ${Math.round(imc)} e sua classificação é Sobrepeso`
    } else if ( imc >= 30 && imc <= 34.9){
        result.innerHTML = `${name.value} seu imc é ${Math.round(imc)} e sua classificação é Obesidade Grau I`
    } else if (imc >= 35 && imc <= 39.9){
        result.innerHTML = `${name.value} seu imc é ${Math.round(imc)} e sua classificação é Obesidade Grau II`
    }else {
        result.innerHTML = `${name.value} seu imc é ${Math.round(imc)} e sua classificação é Obesidade Grau III`
    }

    if (name.value == ""){
        alert('Por favor digite o nome')
        result.innerHTML = 'Digite o nome'
    } if (weight.value == ""){
        alert('Por favor digite o seu peso')
        result.innerHTML = 'Digite o seu peso'
    } if (height.value == ""){
        alert('Por favor digite a sua altura')
        result.innerHTML = 'Digite a sua altura'
    }
}

