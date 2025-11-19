function solve(stockArr, orderedArr){
    const stock = {};
    for (let i = 0; i<stockArr.length; i+=2){
        const name = stockArr[i];
        const quantity = Number(stockArr[i+1]);

        stock[name] = quantity;
    }

    for (let i = 0; i<orderedArr.length; i+=2){
        const name = orderedArr[i];
        const quantity = Number(orderedArr[i+1]);

        if(!(name in stock)) stock[name]=0;
        stock[name] += quantity;
    }

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}

solve([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
);