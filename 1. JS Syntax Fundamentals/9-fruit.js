function solve(fruit, wightInGrams, pricePerKilograms) {
    const weightInKilograms = wightInGrams*0.001;
    const totalCost = weightInKilograms*pricePerKilograms;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);