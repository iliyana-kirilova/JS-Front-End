function sumTable() {
    const priceTdEl = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    const sumTdEl = priceTdEl.pop();

    let sum = 0;
    for(let tdEl of priceTdEl){
        const price = Number(tdEl.textContent);
        sum+=price;
    }

    sumTdEl.textContent = sum;

}