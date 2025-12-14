const url = "http://localhost:3030/jsonstore/orders";

const loadButton = document.querySelector("button#load-orders");
const orderButton = document.querySelector("button#order-btn");
const editButton = document.querySelector("button#edit-order");
const orderList = document.getElementById("list");

const nameInput = document.querySelector("input#name");
const quantityInput = document.querySelector("input#quantity");
const dateInput = document.querySelector("input#date");

loadButton.addEventListener("click", reloadOrders);

orderButton.addEventListener("click", async(event)=>{
    event.preventDefault();
    event.stopPropagation();
    const body = createOrderInstance();
    if (!body) return;

    await fetch(url, {method: "POST", body: JSON.stringify(body)});
    clearInputs();
    await reloadOrders();
});

editButton.addEventListener("click", async(event)=>{
    event.preventDefault();
    event.stopPropagation();

    if(!orderToEdit) return;
    const body = createOrderInstance();
    if(!body) return;

    await fetch(`${url}/${orderToEdit._id}`, {method: "PUT", body: JSON.stringify({...body, _id: orderToEdit._id})});
    clearInputs();
    editButton.disabled = true;
    orderButton.disabled = false;

    orderToEdit = null;
    await reloadOrders();

});

function clearInputs() {
    nameInput.value = "";
    quantityInput.value = "";
    dateInput.value = "";
}

function createOrderInstance(){
    if(!nameInput.value || !quantityInput.value || !dateInput.value) return null;
    return {name: nameInput.value, quantity: quantityInput.value, date:dateInput.value}
}

async function reloadOrders() {
    const getOrdersResponse = await fetch(url);
    const orders = await getOrdersResponse.json();

    orderList.replaceChildren(...Object.values(orders).map(createOrderElement));
}

let orderToEdit = null;

function createOrderElement(orderElement){
    const nameHeader = document.createElement("h2");
    nameHeader.textContent = orderElement.name;

    const dateHeader = document.createElement("h3");
    dateHeader.textContent = orderElement.date;

    const quantityHeader = document.createElement("h3");
    quantityHeader.textContent = orderElement.quantity;

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";

    const doneButton = document.createElement("button");
    doneButton.className = "done-btn";
    doneButton.textContent = "Done";

    const orderContainer = document.createElement("div");
    orderContainer.className = "container"
    orderContainer.appendChild(nameHeader);
    orderContainer.appendChild(dateHeader);
    orderContainer.appendChild(quantityHeader);
    orderContainer.appendChild(changeButton);
    orderContainer.appendChild(doneButton);

    changeButton.addEventListener("click", ()=>{
        orderContainer.remove();
        nameInput.value = orderElement.name;
        quantityInput.value = orderElement.quantity;
        dateInput.value = orderElement.date;

        editButton.disabled = false;
        orderButton.disabled = true;

        orderToEdit = orderElement;

    });

    doneButton.addEventListener("click", async()=>{
        await fetch(`${url}/${orderElement._id}`, {method: "DELETE"});

        await reloadOrders();
    });

    return orderContainer;

}