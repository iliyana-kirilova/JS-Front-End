function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice =0;
    for (let index = 1; index < lostFights; index++) {
        if (index%2===0) totalPrice+=helmetPrice;

        if (index%3===0) totalPrice+=swordPrice;

        if (index%6===0) totalPrice+=shieldPrice;

        if (index%12===0) totalPrice+=armorPrice;
        
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
solve(23, 12.5, 21.5, 40, 200);