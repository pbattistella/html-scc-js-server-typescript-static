let pontos

const calcularPontos = function(){
    pontos = 0

    let p11 = document.getElementById('p11')
    let p12 = document.getElementById('p12')
    let p13 = document.getElementById('p13')
    let p14 = document.getElementById('p14')
    let p15 = document.getElementById('p15')

    if(p11.checked) {
        //console.log(p11.value)
        pontos = parseInt(p11.value)
    } else if (p12.checked) {
        //console.log(p12.value)
        pontos = parseInt(p12.value)
    } else if (p13.checked) {
        //console.log(p13.value)
        pontos = parseInt(p13.value)
    } else if (p14.checked) {
        //console.log(p14.value)
        pontos = parseInt(p14.value)
    } else if (p15.checked) {
        //console.log(p15.value)
        pontos = parseInt(p15.value)
    }

    let p21 = document.getElementById('p21')
    let p22 = document.getElementById('p22')
    let p23 = document.getElementById('p23')
    let p24 = document.getElementById('p24')
    let p25 = document.getElementById('p25')

    if (p21.checked){
        pontos += parseInt(p21.value)
    } else if (p22.checked){
        pontos += parseInt(p22.value)
    } else if (p23.checked){
        pontos += parseInt(p23.value)
    } else if (p24.checked){
        pontos += parseInt(p24.value)
    } else if (p25.checked){
        pontos += parseInt(p25.value)
    }

    let p31 = document.getElementById('p31')
    let p32 = document.getElementById('p32')
    let p33 = document.getElementById('p33')
    let p34 = document.getElementById('p34')
    let p35 = document.getElementById('p35')

    if (p31.checked){
        pontos += parseInt(p31.value)
    } else if (p32.checked){
        pontos += parseInt(p32.value)
    } else if (p33.checked){
        pontos += parseInt(p33.value)
    } else if (p34.checked){
        pontos += parseInt(p34.value)
    } else if (p35.checked){
        pontos += parseInt(p35.value)
    }
    document.getElementById('resultado').innerHTML = '<h2>Resultado da pesquisa</h2><br>Pontos: ' + pontos + '<br><h6>Máximo: 15, Mínimo: 3</h6>'
}