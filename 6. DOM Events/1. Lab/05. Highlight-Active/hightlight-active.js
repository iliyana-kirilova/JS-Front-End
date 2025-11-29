document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const allInputEL = document.querySelectorAll('input[type="text"]');
    for(const inputEl of allInputEL){
        inputEl.addEventListener('focus', addFocusedClass);
        inputEl.addEventListener('blur', removeFocusedClass);
    }

    function addFocusedClass(event){
        event.target.parentElement.classList.add('focused');
    }

    function removeFocusedClass(event){
        event.target.parentElement.classList.remove('focused');
    }
}
