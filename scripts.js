// Pegando os elementos que irão receber o valor digitado pelo usuário
const number = document.getElementById("number")
const numberFrom = document.getElementById("numberFrom")
const numberTo = document.getElementById("numberTo")

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