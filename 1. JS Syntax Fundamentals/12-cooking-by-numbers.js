function solve(num, ...options) {
    let result = Number(num); //Преобразуване на текст в число

    for (const operation of options) {
        if (operation === "chop") result /= 2;
        else if (operation === "dice") result = Math.sqrt(result);
        else if (operation === "spice") result += 1;
        else if (operation === "bake") result *= 3;
        else if (operation === "fillet") result *= 0.8;

        console.log(result);
    }
}

solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");