function calc() {
    let num1InputEl = document.getElementById('num1');
    let num2InputEl = document.getElementById('num2');
    let sum1InputEl = document.getElementById('sum');

    let num1 = Number(num1InputEl.value); // input стойносста идва като стринг, затова я превърщаме в число
    let num2 = Number(num2InputEl.value); // .value - дава стояността на елемента

    let sum = num1+num2;
    sum1InputEl.value = sum; //задавам сумата към input стойността
}


