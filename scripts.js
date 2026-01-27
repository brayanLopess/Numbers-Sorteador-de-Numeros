// Inputs de número
const number = document.getElementById("number");
const numberFrom = document.getElementById("numberFrom");
const numberTo = document.getElementById("numberTo");

// Botão de checkbox
const toggleButton = document.getElementById("toggleButton");

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

function toRaffle() {
  let numberValue = Number(number.value);
  let numberFromValue = Number(numberFrom.value);
  let numberToValue = Number(numberTo.value);

  let results = [];
  if (numberValue && numberFromValue && numberToValue !== null) {
    if (numberToValue > numberFromValue) {
      for (numberCount = 0; numberCount < numberValue; numberCount++) {
        let numRaffled = Math.floor(
          Math.random() * (numberToValue - numberFromValue) + numberFromValue,
        );
        let valueOfNum = Number(numRaffled.valueOf());
        if (!results.includes(numRaffled)) {
          results.push(numRaffled.valueOf());
        } else {
          results.push(
            Math.floor(
              Math.random() * (numberToValue - numberFromValue !== valueOfNum) +
                numberFromValue +
                valueOfNum,
            ),
          );
        }
      }
    } else {
         alert(
      "Não foi possível realizar o sorteio pois o máximo NÃO é maior que o mínimo. Por favor, insira um número máximo maior que o mínimo e tente novamente.",
    );
    }
  } else {
    alert("Não foi possível realizar o sorteio pois não tem nenhum valor ou está faltando colocar um número. Por favor, insira os números corretamente e tente novamente.")
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
