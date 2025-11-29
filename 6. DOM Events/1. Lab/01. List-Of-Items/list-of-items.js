function addItem() {
    let ul = document.getElementById("items");
    let textInput = document.getElementById("newItemText");
    let li = document.createElement("li");

    let text = textInput.value.trim();
    li.textContent = text;
    ul.appendChild(li);
    
    textInput.value = "";
    
}
