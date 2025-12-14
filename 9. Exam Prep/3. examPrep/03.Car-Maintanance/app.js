const url = "http://localhost:3030/jsonstore/appointments";

const addButton = document.getElementById("add-appointment");
const editButton = document.getElementById("edit-appointment");
const loadButton = document.getElementById("load-appointments");
const appointmentList = document.getElementById("appointments-list");

const carModelInput = document.getElementById("car-model");
const serviceOptionInput = document.getElementById("car-service");
const dateInput = document.getElementById("date");

loadButton.addEventListener("click", reloadAppointments);

async function reloadAppointments(){
    const getAppointmentsResponse = await fetch(url);
    const appointments = await getAppointmentsResponse.json();

    appointmentList.replaceChildren(...Object.values(appointments).map(createAppointmentElement));
    editButton.disabled = true;
}

let appointmentToEdit = null;

editButton.addEventListener("click", async(event)=>{
    event.preventDefault();
    event.stopPropagation();
    if(!appointmentToEdit) return;
    const body = createAppointmentInstance();
    if(!body) return;

    await fetch(`${url}/${appointmentToEdit._id}`, {method: "PUT", body: JSON.stringify({...body, _id:appointmentToEdit._id})});
    clearInputs();

    editButton.disabled = true;
    addButton.disabled = false;

    appointmentToEdit = null;
    await reloadAppointments();
});

function createAppointmentElement(appointment){
    const modelHeader = document.createElement("h2");
    modelHeader.textContent = appointment.model;

    const dateHeader = document.createElement("h3");
    dateHeader.textContent = appointment.date;

    const serviceHeader = document.createElement("h3");
    serviceHeader.textContent = appointment.service;

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-appointment";
    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    const liContainer = document.createElement("li");
    liContainer.className = "appointment";
    liContainer.appendChild(modelHeader);
    liContainer.appendChild(dateHeader);
    liContainer.appendChild(serviceHeader);
    liContainer.appendChild(buttonsContainer);

    changeButton.addEventListener("click", ()=>{
        carModelInput.value = appointment.model;
        serviceOptionInput.value = appointment.service;
        dateInput.value = appointment.date;

        editButton.disabled = false;
        addButton.disabled = true;

        appointmentToEdit = appointment;
    });

    deleteButton.addEventListener("click", async()=>{
        await fetch(`${url}/${appointment._id}`, {method: "DELETE"});

        await reloadAppointments();
    });

    return liContainer;
}

addButton.addEventListener("click", async(event)=>{
    event.preventDefault();
    event.stopPropagation();
    const body = createAppointmentInstance();

    if(!body) return;

    await fetch(url, {method: "POST", body: JSON.stringify(body)});

    clearInputs();

    await reloadAppointments();
});

function createAppointmentInstance(){
    if(!carModelInput.value || !serviceOptionInput.value || !dateInput.value) return null;
    return {
        model: carModelInput.value,
        service: serviceOptionInput.value,
        date: date.value
    }
}

function clearInputs() {
    carModelInput.value = "";
    serviceOptionInput.value = "";
    dateInput.value = "";
}

