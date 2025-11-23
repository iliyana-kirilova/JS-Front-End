function solve() {
   const searchFieldInput = document.getElementById("searchField");
   const searchField = searchFieldInput.value.toLowerCase();

   const rows = Array.from(document.querySelectorAll("table.container>tbody>tr"));

   for (const row of rows){
      row.classList.remove("select");
      if(searchField!=="" && row.textContent.toLowerCase().includes(searchField)){
         row.classList.add("select");
      }
   }

   searchFieldInput.value ="";//зачистване на резултата
}