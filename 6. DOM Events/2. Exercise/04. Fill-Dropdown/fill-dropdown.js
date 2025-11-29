document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const textInput = document.getElementById("newItemText");
    const valueInput = document.getElementById("newItemValue");
    const selectMenu = document.getElementById("menu");
    const form = document.querySelector("form");
    
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event){
        event.preventDefault();

        //вземаме стойностите на text и value
        const text = textInput.value;
        const value = valueInput.value;

        let newOption = document.createElement("option");
        newOption.textContent = text;
        newOption.value = value;

        selectMenu.appendChild(newOption);

        textInput.value = "";
        valueInput.value = "";
    }
}