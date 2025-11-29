function addItem() {
    let ul = document.getElementById("items");
    let textInput = document.getElementById("newItemText");
    let li = document.createElement("li");

    let text = textInput.value.trim();
    li.textContent = text;

    const deleteAEl = document.createElement('a');
    deleteAEl.href = '#';
    deleteAEl.textContent = '[Delete]';
    li.appendChild(deleteAEl);

    ul.appendChild(li);

    deleteAEl.addEventListener('click', deleteListItem);
    function deleteListItem(event){
        event.target.parentElement.remove(); 
    }

    textInput.value = "";
    
}
