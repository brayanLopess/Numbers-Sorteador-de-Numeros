// Div of the numbers input
const inputTNumberBox = document.querySelector("#inputTNumberBox")

// Raffle info box
const raffleInfoBox = document.querySelector("#raffleInfoBox")

// Numbers input
const number = document.getElementById("number");
const numberFrom = document.getElementById("numberFrom");
const numberTo = document.getElementById("numberTo");

// Error/Success info box
const errorText = document.querySelector("#errorText");
const errorInfoBox = document.querySelector("#errorInfoBox");
const closeErrorInfo = document.querySelector("#closeErrorInfo");
const successInfoBox = document.querySelector("#successInfoBox");
const closeSuccessInfo = document.querySelector("#closeSuccessInfo");

// Raffle number
const raffleNumberButton = document.getElementById("botaoSortear");

// Structure of the div that will show the result
const resultBox = document.getElementById("resultBox")
const resultText = document.getElementById("resultText")
const resultNumber = document.getElementById("resultNumber")
const resultNumbersBox = document.getElementById("resultNumbersBox")
const numberBox = document.getElementById("numberBox")
const firstNumber = document.getElementById("numberBox")
const scndNumberBox = document.getElementById("scndNumberBox")
const secondNumber = document.getElementById("secondNumber")
const raffleAgainBox = document.getElementById("raffleAgainBox")
const raffleAgainButton = document.getElementById("raffleAgainButton")

// Regex
const hasCharactersRegex = /\D/g;

// Capturing and returning the value of the inputs(number, numberFrom and numberTo)
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

// Adding the functionality to close the infoBoxes
closeErrorInfo.addEventListener("click", () => {
  errorInfoBox.classList.remove("flex");
  errorInfoBox.classList.add("invisible");
});

closeSuccessInfo.addEventListener("click", () => {
  successInfoBox.classList.remove("flex");
  successInfoBox.classList.add("invisible");
});

function toRaffle() {
  let numberValue = Number(number.value);
  let numberFromValue = Number(numberFrom.value);
  let numberToValue = Number(numberTo.value);

  // Botão de checkbox
  const toggleButton = document.getElementById("toggleButton");

  let results = [];
  if (numberValue && numberFromValue && numberToValue !== null) {
    if (numberToValue > numberFromValue) {
      if (toggleButton.checked && numberValue > numberToValue) {
        console.log("O número principal NÃO é menor que o número máximo.");
        errorInfoBox.classList.remove("invisible")
        errorInfoBox.classList.add("flex")
        errorText.textContent = `Não é possível sortear ${numberValue} números não repetidos até ${numberToValue} pois a quantidade inserida não é maior que o máximo.`

        setTimeout(() => {
          errorInfoBox.classList.add("invisible")
          errorInfoBox.classList.remove("flex")
          errorText.textContent = "Verifique se todos os campos estão preenchidos e tente novamente."
        }, "12000")
      } else {
        for (numberCount = 0; numberCount < numberValue; numberCount++) {
          let numRaffled = Math.floor(
            Math.random() * (numberToValue - numberFromValue) + numberFromValue,
          );
          let valueOfNum = Number(numRaffled.valueOf());

          if (toggleButton.checked) {
            if (!results.includes(numRaffled)) {
              results.push(numRaffled.valueOf());
            } else {
              results.push(
                Math.floor(
                  Math.random() *
                    (numberToValue - numberFromValue !== valueOfNum) +
                    numberFromValue +
                    valueOfNum,
                ),
              );
            }
          } else {
            results.push(numRaffled.valueOf());
          }

          successInfoBox.classList.remove("invisible");
          successInfoBox.classList.add("flex");
          setTimeout(() => {
            successInfoBox.classList.add("invisible");
            successInfoBox.classList.remove("flex");
          }, "10000");
        }
      }
    } else {
      errorInfoBox.classList.remove("invisible");
      errorInfoBox.classList.add("flex");
      errorText.textContent =
        "O valor inserido como máximo NÃO é maior que o valor mínimo, por favor insira um valor maior para o sorteio poder ser realizado.";

      setTimeout(() => {
        errorInfoBox.classList.add("invisible");
        errorInfoBox.classList.remove("flex");
        errorText.textContent =
          "Verifique se todos os campos estão preenchidos e tente novamente.";
      }, "10000");

      if (
        closeErrorInfo.addEventListener("click", () => {
          errorText.textContent =
            "Verifique se todos os campos estão preenchidos e tente novamente.";
        })
      ) {
      }
    }
  } else {
    errorInfoBox.classList.remove("invisible");
    errorInfoBox.classList.add("flex");
  }
  console.log(results);

}

raffleNumberButton.onclick = () => {
  toRaffle();

  // Cleaning the past numbers before each raffle.
  number.value = "";
  numberTo.value = "";
  numberFrom.value = "";
};
