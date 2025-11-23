function solve() {
    const inputNumber = Number(document.getElementById("input").value);
    const convertTo = document.getElementById("selectMenuTo").value;
    const result = document.getElementById("result");

    let output = "";

    if (convertTo === "binary") {
        output = inputNumber.toString(2);
    } else if (convertTo === "hexadecimal") {
        output = inputNumber.toString(16).toUpperCase();
    }

    result.value = output;
}