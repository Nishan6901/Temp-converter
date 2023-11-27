let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let reaumerInput = document.querySelector('#reaumer > input')
let rankineInput = document.querySelector('#rankine > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin and Reaumer and Rankine */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (4/5)*cTemp
    let rnTemp = 1.8*cTemp + 492
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    reaumerInput.value = roundNumber(rTemp)
    rankineInput.value = roundNumber(rnTemp)
})


/* Fahrenheit to Celcius and Kelvin and Reaumer and Rankine */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15
    let rTemp = (fTemp - 32) * (8/18)
    let rnTemp = (fTemp + 460)
    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    reaumerInput.value = roundNumber(rTemp)
    rankineInput.value = roundNumber(rnTemp)
})

/* Kelvin to Celcius and Fahrenheit and Reaumer and Rankine*/
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32
    let rTemp = (kTemp - 273.15) * (4/5)
    let rnTemp = (kTemp - 273.15) * (9/5) + 492
    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    reaumerInput.value = roundNumber(rTemp)
    rankineInput.value = roundNumber(rnTemp)
})

/* Reaumer to Celsius and Fahrenheit and Kelvin and Rankine */
reaumerInput.addEventListener('input',function(){
    let rTemp = parseFloat(reaumerInput.value)
    let cTemp = rTemp * (5/4)
    let fTemp = rTemp * (9/4) + 32
    let kTemp = rTemp * (5/4) + 273.15
    let rnTemp = rTemp * (9/4) + 492
    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rnTemp)
})

/* Rankine to Celsius and Fahrenheit and Kelvin and Reaumer */
rankineInput.addEventListener('input', function(){
    let rnTemp = parseFloat(rankineInput.value)
    let cTemp = (rnTemp - 492) * (5/9)
    let fTemp = rnTemp - 460
    let kTemp = (rnTemp - 492) * (5/9) + 273.15
    let rTemp = (rnTemp - 492) * (4/9)
    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    reaumerInput.value = roundNumber(rTemp)
})


btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    reaumerInput.value = ""
    rankineInput.value = ""
})

