function subtract() {
    let num1El = document.getElementById('firstNumber');
    let num2El = document.getElementById('secondNumber');
    let resultEl = document.getElementById('result');

    let num1 = Number(num1El.value);
    let num2 = Number(num2El.value);
    let subtract = num1-num2;

    resultEl.textContent = subtract;
}