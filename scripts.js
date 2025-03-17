const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {

  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert" ) // Valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); //0utras moedas
  
  const dolarToday = 5.2 
  const euroToday = 6.2
  const libraToday=7.4
  const bitcoinToday=523.298

  currencyValueToConvert.innerHTML= new Intl.NumberFormat("pt-BR",{
style:"currency",
currency:"BRL"
  }).format(inputCurrencyValue)

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
  }

 if(currencySelect.value=="euro"){
  currencyValueConverted.innerHTML= new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
  }).format(inputCurrencyValue/euroToday)

 }
 if(currencySelect.value=="libra"){
  currencyValueConverted.innerHTML= new Intl.NumberFormat("en-GB",{
    style: "currency",
    currency:"GBP"
  }).format(inputCurrencyValue/ libraToday)
 }
 if(currencySelect.value=="bitcoin"){
currencyValueConverted.innerHTML= new Intl.NumberFormat("de-DE",{
  style:"currency",
  currency:"BTC"
}).format(inputCurrencyValue/bitcoinToday)
 }

}

function changeCurrency() {
 const currencyName =document.getElementById("currency-name")
 const currencyImg=document.querySelector(".currency-img")
 
 if(currencySelect.value=="dolar") {
  currencyName.innerHTML="Dólar americano"
  currencyImg.src="./assets/dolar.png"
 }

  if(currencySelect.value=="euro") {
    currencyName.innerHTML="Euro"
  currencyImg.src="./assets/euro.png"
}

if(currencySelect.value=="libra") {
  currencyName.innerHTML="Libra"
 currencyImg.src="./assets/libra.png"
}

  if(currencySelect.value=="bitcoin") {
    currencyName.innerHTML="Bitcoin"
    currencyImg.src="./assets/bitcoin.png"
}

convertValues()

}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
