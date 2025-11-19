function solve(input){
    const heroes = [];
    for(const element of input){
        const data = element.split(" / ");
        const name = data[0];
        const level = Number(data[1]);

        let items;
        if(data.length>2) items = data[2].split(", ");
        else items =[];

        heroes.push({name,level,items});
    }

    heroes.sort((a,b)=> a.level - b.level);
    for(const hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);

solve([
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
]
);