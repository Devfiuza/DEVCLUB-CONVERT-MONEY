const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const selectConvertFrom=document.querySelector(".currency-convert-from")


function convertValues() {

  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert" )
  const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

  
  const dolarToday = 5.2 
  const euroToday = 6.2
  const libraToday=7.4
  const bitcoinToday=523.298
  const realToday=3.2
  

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday)

  } if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)

}

function changeCurrency() {
 const currencyName =document.getElementById("currency-name")
 const nameToconvert=document.getElementById("name-to-convert")
 const currencyImage=document.querySelector(".currency-img")
 const currencyImg=document.querySelector(".currency-image")

 if(currencySelect.value=="dolar") {
  nameToconvert.innerHTML="Dólar americano"
  currencyImage.src="./assets/dolar.png"
 
 }

  if(currencySelect.value=="euro") {
    nameToconvert.innerHTML="Euro"
  currencyImage.src="./assets/euro.png"
  
}

if(currencySelect.value=="libra") {
  nameToconvert.innerHTML="Libra"
  currencyImage.src="./libra.png"
  }
  if(currencySelect.value=="bitcoin") {
    nameToconvert.innerHTML="Bitcoin"
    currencyImage.src="./assets/bitcoin.png"
}

if(currencySelect.value=="real") {
  nameToconvert.innerHTML="Real brasileiro"
  currencyImage.src="./real.png"
}

if(selectConvertFrom.value=="Real") {
  nameToconvert.innerHTML="Real brasileiro"
  currencyImg.src="./real.png"
 
 }

  if(selectConvertFrom.value=="Dolar") {
  currencyName.innerHTML="Dolar"
  currencyImg.src="./assets/dolar.png"
  
}

if(selectConvertFrom.value=="Euro") {
  currencyName.innerHTML="Euro"
  currencyImg.src="./euro.png"
  }

  if(selectConvertFrom.value=="Libra") {
    currencyName.innerHTML="Libra"
    currencyImg.src="./assets/libra.png"
}

if(selectConvertFrom.value=="Bitcoin") {
  currencyName.innerHTML="Bitcoin"
  currencyImg.src="./bitcoin.png"

convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues)
