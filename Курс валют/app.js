const resultDiv = document.querySelector(".result-div");

const input = document.querySelector(".input");

const toUsdBtn = document.getElementById("to-usd-btn")
const toEurBtn = document.getElementById("to-eur-btn")
const toRubBtn = document.getElementById("to-rub-btn")

const usdBtn = document.getElementById("usd-btn")
const eurBtn = document.getElementById("eur-btn")
const rubBtn = document.getElementById("rub-btn")



let resultcCurrency = 0
let num = 0

function addUSD() {
    num= input.value
    let a = input.value += " USD"

    console.log(a);
    resultcCurrency = a 
    console.log(resultcCurrency);
}
toUsdBtn.addEventListener("click", addUSD) 



function addEUR() {
    num= input.value
    let a = input.value += " EUR"

    console.log(a);
    resultcCurrency = a 
    console.log(resultcCurrency);
}
toEurBtn.addEventListener("click", addEUR) 



function addRUB() {
    num= input.value
    let a = input.value += " RUB"
    console.log(a);
    resultcCurrency = a 
    console.log(resultcCurrency);
    

}
toRubBtn.addEventListener("click", addRUB) 

// if resultcCurrency имееет курс руб и тд 
// то вывод курс 

function usd(){
    console.log("usd");
    
    if(resultcCurrency.includes("EUR")) {
        // console.log("net");
        let e = num * 0.92
        console.log(e);
        resultDiv.textContent = e
    }else if (resultcCurrency.includes("RUB")) {
        let e = num * 0.0118
        console.log(e);
        resultDiv.textContent = e
    }else{
        resultDiv.textContent = "Выберите другую валюту!"
    }
}
usdBtn.addEventListener("click", usd)



function eur(){
    console.log("eur");
    if (resultcCurrency.includes("USD")) {
        let e = num * 1.08
        console.log(e);
        resultDiv.textContent = e
    }else if (resultcCurrency.includes("RUB")){
        let e = num * 0.92
        console.log(e);
        resultDiv.textContent = e
    }else{
        resultDiv.textContent = "Выберите другую валюту!"
    }
}
eurBtn.addEventListener("click", eur)



function rub(){
    // console.log("rub");
    if (resultcCurrency.includes("USD")) {
        let e = num * 84.21
        console.log(e);
        resultDiv.textContent = e
    }else if (resultcCurrency.includes("EUR")){
    let e = num * 1.08
    console.log(e);
    resultDiv.textContent = e
    }else{
        resultDiv.textContent = "Выберите другую валюту!"
    }
}
rubBtn.addEventListener("click", rub)



