window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector("form.laptop-info");

  const laptopModelInput = form.querySelector("input#laptop-model");
  const storageInput = form.querySelector("input#storage");
  const priceInput = form.querySelector("input#price");

  const addButton = document.getElementById("add-btn");
  const clearButton = document.querySelector(".clear");

  const checkList = document.querySelector("ul#check-list");
  const wishList = document.querySelector("ul#laptops-list");

  addButton.addEventListener("click", ()=>{
    if(!laptopModelInput.value || !storageInput.value || !priceInput.value) return;

    const data = {
      laptopModel: laptopModelInput.value,
      storage: storageInput.value,
      price: priceInput.value
    };

    const laptopParagraph = document.createElement("p");
    laptopParagraph.textContent = data.laptopModel;

    const storageParagraph = document.createElement("p");
    storageParagraph.textContent = `Memory: ${data.storage} TB`;

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = `Price: ${data.price}$`;


    const article = document.createElement("article");
    article.appendChild(laptopParagraph);
    article.appendChild(storageParagraph);
    article.appendChild(priceParagraph);

    const editButton = createActionButton("edit");
    const okButton = createActionButton("ok");

    const listItem = document.createElement("li");
    listItem.className = "laptop-item";
    listItem.appendChild(article);
    listItem.appendChild(editButton);
    listItem.appendChild(okButton);

    checkList.appendChild(listItem);
    laptopModelInput.value = "";
    storageInput.value = "";
    priceInput.value = "";
    addButton.disabled = true;

    editButton.addEventListener("click", ()=>{
      listItem.remove();
      laptopModelInput.value = data.laptopModel;
      storageInput.value = data.storage;
      priceInput.value = data.price;
      addButton.disabled = false;
    });

    okButton.addEventListener("click", ()=>{
      listItem.remove();
      editButton.remove();
      okButton.remove();

      wishList.appendChild(listItem);
      addButton.disabled = false;
    });

  });

  clearButton.addEventListener("click", ()=>{
    location.reload();
  });

  // function createDetails(name, value, unit){
  //   const paragraph = document.createElement("p");
  //   paragraph.textContent = `${name} ${value}${unit}`;
  //   return paragraph;
  // }

  function createActionButton(action){
    const button = document.createElement("button");
    button.classList.add("btn", action);
    button.textContent = action;

    return button;
  }
}
  