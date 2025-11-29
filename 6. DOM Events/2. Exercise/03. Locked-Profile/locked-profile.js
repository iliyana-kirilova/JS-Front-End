document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const buttonNodeLIst = document.querySelectorAll("button");
    const buttonArr = Array.from(buttonNodeLIst);

    //обхождам бутоните и си закачам слушател на всеки един от тях
    for(let i=0; i<buttonArr.length; i++){
        let button = buttonArr[i];
        button.addEventListener("click",handleHiddenOrShow);
    }

    function handleHiddenOrShow(event){
        event.preventDefault();

        // взимаме бутона, който е натиснат в момента
        const button = event.currentTarget;

        const profile = button.parentElement;

        // намираме lock/unlock радио бутоните
        const lockedRadio = profile.querySelector("input[id$='Lock']");
        const unlockedRadio = profile.querySelector("input[id$='Unlock']");
            
        //правим проверка дали е заключен или намирам
        if (lockedRadio.checked) return;
            
        let currentDiv = button.parentElement.querySelector(".hidden-fields");
        if(button.textContent === 'Show more'){
            currentDiv.style.display = 'block';
            button.textContent = 'Show less';
        }else{
            currentDiv.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}