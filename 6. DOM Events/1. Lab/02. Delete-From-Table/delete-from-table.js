function deleteByEmail() {
     const emailElements = document.querySelectorAll('tr td:nth-child(2)');
    const emailInput = document.querySelector('input[name="email"]');
    const result = document.getElementById("result");

    const email = emailInput.value.trim();
    let found = false;

    for (const tdEl of emailElements) {
        if (tdEl.textContent === email) {
            const trElement = tdEl.parentElement;
            trElement.remove();
            result.textContent = "Deleted.";
            found = true;
        }
    }

    if (!found) {
        result.textContent = "Not found.";
    }
}