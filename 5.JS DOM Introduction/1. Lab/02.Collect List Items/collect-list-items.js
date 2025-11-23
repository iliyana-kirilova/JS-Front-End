function extractText() {
    let liEls = document.querySelectorAll('li');
    let textareaEl = document.querySelector('#result');

    for(let liEl of liEls){
        let text = liEl.textContent;
        textareaEl.textContent +=text + '\n';
    }
}