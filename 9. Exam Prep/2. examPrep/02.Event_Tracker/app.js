window.addEventListener("load", solve);

function solve(){
    const form = document.querySelector("form.event-content");

    const eventNameInput = form.querySelector("input#event");
    const noteInput = form.querySelector("input#note");
    const dateInput = form.querySelector("input#date");

    const safeButton = form.querySelector("button#save");

    const upcomingList = document.querySelector("ul#upcoming-list");
    const finalList = document.querySelector("ul#events-list");

    const deleteButton = document.querySelector("button.delete");

    safeButton.addEventListener("click", ()=>{
        if(!eventNameInput.value || !noteInput.value || !dateInput.value) return;

        const data = {
            event: eventNameInput.value,
            note: noteInput.value,
            date: dateInput.value
        }

        const nameParagraph = createEventDetails("Name:", data.event);
        const noteParagraph = createEventDetails("Note:", data.note);
        const dateParagraph = createEventDetails("Date:", data.date);

        const article = document.createElement("article");
        article.appendChild(nameParagraph);
        article.appendChild(noteParagraph);
        article.appendChild(dateParagraph);

        const editButton= createActionButton("edit");
        const doneButton = createActionButton("done");

        const buttonDiv= document.createElement("div");
        buttonDiv.className = "buttons";
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(doneButton);

        const eventDiv = document.createElement("div");
        eventDiv.className = "event-container";
        eventDiv.appendChild(article);
        eventDiv.appendChild(buttonDiv);

        const listItem = document.createElement("li");
        listItem.className = "event-item";
        listItem.appendChild(eventDiv);

        editButton.addEventListener("click", ()=>{
            listItem.remove();
            eventNameInput.value = data.event;
            noteInput.value = data.note;
            dateInput.value = data.date;
        });

        doneButton.addEventListener("click", ()=>{
            listItem.remove();

            editButton.remove();
            doneButton.remove();

            // махаме event-container и оставяме article директно в li
            const cleanArticle = article.cloneNode(true);

            const cleanLi = document.createElement("li");
            cleanLi.className = "event-item";
            cleanLi.appendChild(cleanArticle);

            finalList.appendChild(cleanLi);
        });

        upcomingList.appendChild(listItem);
        eventNameInput.value = "";
        noteInput.value = "";
        dateInput.value = "";
        
    });

    deleteButton.addEventListener("click", ()=>{
        finalList.remove();
    });

    function createEventDetails(name, value){
        const paragraph = document.createElement("p");
        paragraph.textContent = `${name} ${value}`;
        return paragraph;
    }

    function createActionButton(action){
        const button = document.createElement("button");
        button.classList.add("btn", action);
        button.textContent = action;

        return button;
    }

}

