// Основният URL адрес към JSONStore сървъра,
// където се съхраняват тренировките.
const url = "http://localhost:3030/jsonstore/workout";

// Взимаме основните бутони от HTML страницата.
const loadButton = document.getElementById("load-workout");
const createButton = document.getElementById("add-workout");
const editButton = document.getElementById("edit-workout");
const workoutsList = document.getElementById("list");

// Взимаме контейнера на формата и отделните входни полета.
const formContainer = document.querySelector("div#form");
const workoutInput = formContainer.querySelector("input#workout");
const locationInput = formContainer.querySelector("input#location");
const dateInput = formContainer.querySelector("input#date");

// При натискане на бутона "Load" се презарежда списъка с тренировки.
loadButton.addEventListener("click", reloadWorkouts);

// При натискане на "Add" се създава нов тренировъчен запис.
createButton.addEventListener("click", async () => {
    // Създаваме обект с данните от формата.
    const body = createWorkoutInstance();
    // Ако някое поле липсва → прекратяваме действието.
    if (!body) return;

    // Изпращаме POST заявка към сървъра – създава нова тренировка.
    await fetch(url, { method: "POST", body: JSON.stringify(body) });

    // Изчистваме формата.
    clearInputs();
    // Презареждаме списъка.
    await reloadWorkouts();
});

// Тук ще пазим тренировката, която се редактира в момента.
let workoutToEdit = null;

// При натискане на "Edit" записът се обновява.
editButton.addEventListener("click", async () => {
    if (!workoutToEdit) return; // Ако няма избрана тренировка → нищо не правим.

    const body = createWorkoutInstance(); // Вземаме новите стойности от формата.
    if (!body) return;

    // PUT заявка към сървъра за обновяване на конкретната тренировка.
    await fetch(`${url}/${workoutToEdit._id}`, { method: "PUT", body: JSON.stringify(body) });

    // Нулираме формата и връщаме бутоните в нормално състояние.
    clearInputs();
    createButton.disabled = false; // Разрешаваме отново "Add".
    editButton.disabled = true;    // Скриваме "Edit".
    workoutToEdit = null;          // Няма избрана тренировка.

    await reloadWorkouts(); // Презареждаме списъка.
});

// Създава обект от въведените данни.
// Проверява дали всички полета са попълнени.
function createWorkoutInstance() {
    if (!workoutInput.value || !locationInput.value || !dateInput.value) return null;
    return { workout: workoutInput.value, location: locationInput.value, date: dateInput.value };
}

// Изчиства формата.
function clearInputs() {
    workoutInput.value = "";
    locationInput.value = "";
    dateInput.value = "";
}

// Зарежда и визуализира всички тренировки.
async function reloadWorkouts() {
    // Взимаме всички тренировки.
    const getWorkoutsResponse = await fetch(url);
    const workouts = await getWorkoutsResponse.json();

    // Заменяме съдържанието на списъка с нови DOM елементи.
    workoutsList.replaceChildren(...Object.values(workouts).map(createWorkoutElement));
}

// Създава визуален DOM елемент за една тренировка.
function createWorkoutElement(workout) {
    // Създаваме отделните елементи за заглавие, дата и локация.
    const nameHeader = document.createElement("h2");
    nameHeader.textContent = workout.workout;

    const dateHeader = document.createElement("h3");
    dateHeader.textContent = workout.date;

    const locationHeader = document.createElement("h3");
    locationHeader.id = "location";
    locationHeader.textContent = workout.location;

    // Създаваме бутон "Change" (редакция)
    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";

    // Създаваме бутон "Done" (изтриване)
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Done";

    // Контейнер за бутоните.
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons-container";
    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    // Главен контейнер за тренировката.
    const workoutContainer = document.createElement("div");
    workoutContainer.className = "container";
    workoutContainer.appendChild(nameHeader);
    workoutContainer.appendChild(dateHeader);
    workoutContainer.appendChild(locationHeader);
    workoutContainer.appendChild(buttonsContainer);

    // --------------------------
    // ФУНКЦИЯ ЗА РЕДАКЦИЯ
    // --------------------------
    changeButton.addEventListener("click", () => {
        // Премахваме елемента визуално от списъка.
        workoutContainer.remove();

        // Поставяме стойностите в полетата за редакция.
        workoutInput.value = workout.workout;
        locationInput.value = workout.location;
        dateInput.value = workout.date;

        // Забраняваме създаване на нови записи и включваме бутон Edit.
        createButton.disabled = true;
        editButton.disabled = false;

        // Запомняме кой запис редактираме.
        workoutToEdit = workout;
    });

    // --------------------------
    // ФУНКЦИЯ ЗА ИЗТРИВАНЕ
    // --------------------------
    deleteButton.addEventListener("click", async () => {
        // DELETE заявка към сървъра.
        await fetch(`${url}/${workout._id}`, { method: "DELETE" });
        // Презареждаме списъка след изтриване.
        await reloadWorkouts();
    });

    return workoutContainer; // Връщаме DOM елемента за визуализация.
}
