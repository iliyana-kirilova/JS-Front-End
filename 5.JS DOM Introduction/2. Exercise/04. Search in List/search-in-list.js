function solve() {
   const townElements = Array.from(document.querySelectorAll("ul#towns li"));
   const searchText = document.getElementById("searchText").value.toLowerCase(); //правя текста с малки букви

   let matches=0; //създавам променлива, където да държа съвпаденията;
   townElements.forEach(li=>{
      //изчиствам предищните търсения
      li.style.fontWeight = 'normal';
      li.style.textDecoration = 'none';

      //търся текст
      if(searchText!=='' && li.textContent.toLowerCase().includes(searchText)){
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         matches++;
      }
   });

   //вземам резултата и записвам текста за броя намерени търсения
   const result = document.getElementById("result");
   if(result){
      result.textContent=`${matches} matches found`;
   }


}