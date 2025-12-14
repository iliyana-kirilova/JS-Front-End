// Когато прозорецът (страницата) напълно се зареди,
// извикваме функцията solve(). Това гарантира, че
// всички HTML елементи вече съществуват в DOM-а.
window.addEventListener("load", solve);


function solve() {
    // Взимаме формата по нейните класове.
    const form = document.querySelector("form.registerEvent");

    // Взимаме трите входни полета от формата.
    const emailInput = form.querySelector("input#email");
    const eventInput = form.querySelector("input#event");
    const locationInput = form.querySelector("input#location");

    // Бутонът "Next" (следваща стъпка).
    const nextButton = form.querySelector("button#next-btn");

    // Дясната секция – списък за преглед преди окончателно изпращане.
    const previewList = document.querySelector("ul#preview-list");

    // Финалният списък – тук се показват „приетите“ заявки.
    const finalList = document.querySelector("ul#event-list");

    // При натискане на бутона "Next"
    nextButton.addEventListener("click", () => {

        // Проверка дали всички полета са попълнени.
        if (!emailInput.value || !eventInput.value || !locationInput.value) return;

        // Съхраняваме текущите стойности в обект.
        // Това е важно, защото при редакция трябва да ги върнем обратно.
        const data = { 
            email: emailInput.value, 
            event: eventInput.value, 
            location: locationInput.value 
        };

        // Създаваме елемент <h4> за имейла.
        const emailHeader = document.createElement("h4");
        emailHeader.textContent = data.email;

        // Параграф за "Event: ..."
        const eventParagraph = createEventDetails("Event:", data.event);

        // Параграф за "Location: ..."
        const locationParagraph = createEventDetails("Location:", data.location);

        // Създаваме article елемент – групира данните.
        const article = document.createElement("article");
        article.appendChild(emailHeader);
        article.appendChild(eventParagraph);
        article.appendChild(locationParagraph);

        // Двата бутона: edit и apply.
        const editButton = createActionButton("edit");
        const applyButton = createActionButton("apply");

        // Създаване на <li> елемент, който ще съдържа заявката.
        const listItem = document.createElement("li");
        listItem.className = "application";
        listItem.appendChild(article);
        listItem.appendChild(editButton);
        listItem.appendChild(applyButton);

        // -----------------------
        // БУТОН "EDIT"
        // -----------------------
        editButton.addEventListener("click", () => {
            // Премахваме елемента от "preview" списъка.
            listItem.remove();

            // Връщаме стойностите обратно във формата за редакция.
            emailInput.value = data.email;
            eventInput.value = data.event;
            locationInput.value = data.location;
        });

        // -----------------------
        // БУТОН "APPLY"
        // -----------------------
        applyButton.addEventListener("click", () => {
            // Премахваме от preview секцията.
            listItem.remove();

            // Премахваме бутоните, защото крайният списък не трябва да има редакция.
            editButton.remove();
            applyButton.remove();

            // Преместваме елемента в крайната секция.
            finalList.appendChild(listItem);
        });

        // Добавяме заявката в „preview“ списъка.
        previewList.appendChild(listItem);

        // Нулираме формата.
        emailInput.value = "";
        eventInput.value = "";
        locationInput.value = "";
    });

    // -----------------------------------------------
    // ФУНКЦИЯ: създава параграф със strong + br + текст
    // Пример:
    // <p><strong>Event:</strong><br>Birthday Party</p>
    // -----------------------------------------------
    function createEventDetails(name, value) {
        const strong = document.createElement("strong");
        strong.textContent = name;

        const newLine = document.createElement("br");

        const paragraph = document.createElement("p");
        paragraph.appendChild(strong);
        paragraph.appendChild(newLine);

        // Добавяме самата стойност като текстов възел.
        paragraph.appendChild(document.createTextNode(value));

        // Можеше и така: paragraph.innerHTML += value;
        // Но използваме appendChild за по-чиста структура.

        return paragraph;
    }

    // -----------------------------------------------
    // ФУНКЦИЯ: създава бутон с класове .action-btn и .edit/.apply
    // -----------------------------------------------
    function createActionButton(action) {
        const button = document.createElement("button");
        button.classList.add("action-btn", action); // например class="action-btn edit"
        button.textContent = action;                // текстът в бутона

        return button;
    }
}
