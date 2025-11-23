function solve() {
    const selectedColums = [];
    document
        .querySelector("table>thead>tr")
        .querySelectorAll("th>input")
        .forEach((checkbox, index)=>{ //добавяме само checked колоните
            if(checkbox.checked) selectedColums.push({index, propertyName: checkbox.attributes["name"].value})
        }); // индекс на колоната в таблицата
            // името, което ще бъде ключ в обекта

    //Събираме всички данни от избраните колони
    const data = [];
    document.querySelectorAll("table>tbody>tr").forEach((row)=>{
        const cells = row.children;

        const obj = {};
        // минаваме само по checked колоните
        for(const column of selectedColums){
            obj[column.propertyName] = cells[column.index].innerText;
        }

        data.push(obj);
    });

    const outputElement = document.querySelector("#output");
    outputElement.textContent = JSON.stringify(data);
}