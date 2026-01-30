// Inputs de número
const number = document.getElementById("number");
const numberFrom = document.getElementById("numberFrom");
const numberTo = document.getElementById("numberTo");

// Error/Success info box
const errorText = document.querySelector("#errorText")
const errorInfoBox = document.querySelector("#errorInfoBox")
const closeErrorInfo = document.querySelector("#closeErrorInfo")
const successInfoBox = document.querySelector("#successInfoBox")
const closeSuccessInfo = document.querySelector("#closeSuccessInfo")

// Botão Sortear
const raffleNumberButton = document.getElementById("botaoSortear");

// Regex
const hasCharactersRegex = /\D/g;

number.oninput = () => {
  const numberValue = number.value.replace(hasCharactersRegex, "");
  number.value = numberValue;
};

numberFrom.oninput = () => {
  const numberValue = numberFrom.value.replace(hasCharactersRegex, "");
  numberFrom.value = numberValue;
};

numberTo.oninput = () => {
  const numberValue = numberTo.value.replace(hasCharactersRegex, "");
  numberTo.value = numberValue;
};

closeErrorInfo.addEventListener("click", () => {
  errorInfoBox.classList.remove("flex")
  errorInfoBox.classList.add("invisible")
})

closeSuccessInfo.addEventListener("click", () => {
  successInfoBox.classList.remove("flex")
  successInfoBox.classList.add("invisible")
})

function toRaffle() {
  let numberValue = Number(number.value);
  let numberFromValue = Number(numberFrom.value);
  let numberToValue = Number(numberTo.value);

  // Botão de checkbox
  const toggleButton = document.getElementById("toggleButton");

  let results = [];
  if (numberValue && numberFromValue && numberToValue !== null) {
    if (numberToValue > numberFromValue) {
      for (numberCount = 0; numberCount < numberValue; numberCount++) {
        let numRaffled = Math.floor(
          Math.random() * (numberToValue - numberFromValue) + numberFromValue,
        );
        let valueOfNum = Number(numRaffled.valueOf());

        if(toggleButton.checked) {
          if(!results.includes(numRaffled)) {
            results.push(numRaffled.valueOf())
          } else {
            results.push(
            Math.floor(
              Math.random() * (numberToValue - numberFromValue !== valueOfNum) +
                numberFromValue +
                valueOfNum,
            ),
          )
          }
        } else {
          results.push(numRaffled.valueOf())
        }
        
        successInfoBox.classList.remove("invisible")
        successInfoBox.classList.add("flex")
        setTimeout(() => {
          successInfoBox.classList.add("invisible")
          successInfoBox.classList.remove("flex")
        }, "10000")
      }
    } else {
        errorInfoBox.classList.remove("invisible")
        errorInfoBox.classList.add("flex")
        errorText.textContent = "O valor inserido como máximo NÃO é maior que o valor mínimo, por favor insira um valor maior para o sorteio poder ser realizado."

        setTimeout(() => {
          errorInfoBox.classList.add("invisible")
          errorInfoBox.classList.remove("flex")
          errorText.textContent = "Verifique se todos os campos estão preenchidos e tente novamente."
        }, "10000")

        if(closeErrorInfo.addEventListener("click", () => {
          errorText.textContent = "Verifique se todos os campos estão preenchidos e tente novamente."
        })) {}
    }
  } else {
    errorInfoBox.classList.remove("invisible")
    errorInfoBox.classList.add("flex")
  }
  console.log(results);
}

raffleNumberButton.onclick = () => {
  toRaffle();

  // Limpando os números anteriores antes de cada sorteio.
  number.value = ""
  numberTo.value = ""
  numberFrom.value = ""
};
