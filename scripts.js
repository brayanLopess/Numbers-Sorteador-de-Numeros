// Inputs de número
const number = document.getElementById("number")
const numberFrom = document.getElementById("numberFrom")
const numberTo = document.getElementById("numberTo")

// Botão Sortear
const raffleNumberButton = document.getElementById("botaoSortear")

// Regex
const hasCharactersRegex = /\D/g

number.oninput = () => {
    const numberValue = number.value.replace(hasCharactersRegex, "")
    number.value = numberValue
}

numberFrom.oninput = () => {
    const numberValue = numberFrom.value.replace(hasCharactersRegex, "")
    numberFrom.value = numberValue
}

numberTo.oninput = () => {
    const numberValue = numberTo.value.replace(hasCharactersRegex, "")
    numberTo.value = numberValue
}

function toRaffle() {
    
    let numberValue = number.value
    let numberFromValue = Number(numberFrom.value)
    let numberToValue = Number(numberTo.value)

    console.log(typeof numberValue)

    const numRaffled = Math.floor(Math.random() * (numberToValue - numberFromValue) + numberFromValue)
    console.log(numRaffled)
}

raffleNumberButton.onclick = () => {
    toRaffle()
}