// Raffle info box
const raffleInfoBox = document.querySelector("#raffleInfoBox");

// Div of the numbers input
const inputTNumberBox = document.querySelector("#inputTNumberBox");

// Toggle Button div
const toggleButtonBox = document.querySelector("#toggleButtonBox");

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
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const resultNumber = document.getElementById("resultNumber");
const resultNumbersBox = document.getElementById("resultNumbersBox");
const numberBox = document.getElementById("numberBox");
const firstNumber = document.getElementById("firstNumber");
const scndNumberBox = document.getElementById("scndNumberBox");
const secondNumber = document.getElementById("secondNumber");
const newNumbersBox = document.getElementById("newNumbersBox")
const raffleAgainBox = document.getElementById("raffleAgainBox");
const raffleAgainButton = document.getElementById("raffleAgainButton");

let newDiv = "";
let newSpan = "";

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
        errorInfoBox.classList.remove("invisible");
        errorInfoBox.classList.add("flex");
        errorText.textContent = `Não é possível sortear ${numberValue} números não repetidos até ${numberToValue} pois a quantidade inserida não é maior que o máximo.`;

        setTimeout(() => {
          errorInfoBox.classList.add("invisible");
          errorInfoBox.classList.remove("flex");
          errorText.textContent =
            "Verifique se todos os campos estão preenchidos e tente novamente.";
        }, "12000");
      } else {
        for (numberCount = 0; numberCount < numberValue; numberCount++) {
          let numRaffled = Math.floor(
            Math.random() * (numberToValue - numberFromValue) + numberFromValue,
          );
          let valueOfNum = Number(numRaffled.valueOf());
          let calcAgain = Math.floor(
            Math.random() * (numberToValue - numberFromValue !== valueOfNum) +
              numberFromValue +
              valueOfNum,
          );

          if (toggleButton.checked) {
            while (results.includes(numRaffled)) {
              numRaffled = Math.floor(
                Math.random() * (numberToValue - numberFromValue) +
                  numberFromValue,
              );
            }
            results.push(numRaffled);
          } else {
            results.push(numRaffled);
          }

          successInfoBox.classList.remove("invisible");
          successInfoBox.classList.add("flex");
          setTimeout(() => {
            successInfoBox.classList.add("invisible");
            successInfoBox.classList.remove("flex");
          }, "10000");
        }

        // Hiding the raffle to show raffle Again
        raffleInfoBox.classList.add("invisible");
        inputTNumberBox.classList.remove("flex");
        inputTNumberBox.classList.add("invisible");
        toggleButtonBox.classList.add("invisible");
        botaoSortear.classList.add("invisible");

        // Showing the result of the raffle in the screen
        resultBox.classList.remove("invisible");
        resultBox.classList.add("flex");
        resultText.classList.remove("invisible");
        resultNumber.classList.remove("invisible");
        resultNumbersBox.classList.remove("invisible");
        numberBox.classList.remove("invisible");
        scndNumberBox.classList.remove("invisible");

        for (let i = 2; i < results.length; i++) {
          firstNumber.textContent = results[0];
          secondNumber.textContent = results[1];

          newDiv = document.createElement("div");
          newSpan = document.createElement("span");
          newDiv.id = "newDiv";
          newSpan.id = "newSpan";

          newNumbersBox.append(newDiv);
          newDiv.append(newSpan);
          newSpan.textContent = results[i];
        }

        // Setting time out to show the button "Raffle Again" only when the animation of the number stops.
        setTimeout(() => {
          raffleAgainBox.classList.remove("invisible");
          raffleAgainButton.classList.remove("invisible");
        }, "5000");
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

function raffleAgain() {
  // Hiding the result of the raffle in the screen
  resultBox.classList.add("invisible");
  resultBox.classList.remove("flex");
  resultText.classList.add("invisible");
  resultNumber.classList.add("invisible");
  resultNumbersBox.classList.add("invisible");
  numberBox.classList.add("invisible");
  scndNumberBox.classList.add("invisible");

  // Showing the inputs to the user for raffle again
  raffleInfoBox.classList.remove("invisible");
  inputTNumberBox.classList.add("flex");
  inputTNumberBox.classList.remove("invisible");
  toggleButtonBox.classList.remove("invisible");
  botaoSortear.classList.remove("invisible");
}

raffleNumberButton.onclick = () => {
  toRaffle();

  // Cleaning the past numbers before each raffle.
  number.value = "";
  numberTo.value = "";
  numberFrom.value = "";
};

raffleAgainButton.onclick = () => {
  if(newNumbersBox.contains(newDiv)){
    while(newNumbersBox.contains(newDiv)) {
      newNumbersBox.replaceChildren()
    }
  }

  raffleAgain();
};
