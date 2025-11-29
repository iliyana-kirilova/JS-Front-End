document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formElement = document.querySelector("form#task-input");
   const inputElement = formElement.querySelector("input[type='text']");
   const contentElement = document.querySelector("div#content");

   function createSection(title){
      const container = document.createElement("div");
      const paragraph = document.createElement("p");
      paragraph.textContent =title;
      paragraph.style.display = "none";
      container.appendChild(paragraph);
      container.addEventListener("click", (event) =>{
         event.preventDefault();
         event.stopPropagation();
         paragraph.style.display = "";
      });

      contentElement.appendChild(container);
   }

   formElement.addEventListener("submit", (event)=>{
      event.preventDefault();
      event.stopPropagation();

      const value = inputElement.value;
      const sections = value.split(", ");

      contentElement.textContent = "";
      sections.forEach(createSection);
   });

  
}