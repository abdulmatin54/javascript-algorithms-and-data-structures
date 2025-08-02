const input = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  input.value = "";
  output.innerText = "";
});

convertBtn.addEventListener("click", convertToRoman);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman();
  }
});

function convertToRoman() {
  const inputVal = input.value;

  if (inputVal === "" || isNaN(inputVal)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  const num = parseInt(inputVal);

  if (num < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (num >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = num;

  for (let i = 0; i < romanNumerals.length; i++) {
    while (remaining >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      remaining -= romanNumerals[i].value;
    }
  }

  output.innerText = result;
}