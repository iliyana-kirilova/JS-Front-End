function cityProps(cityObj){
    let entries = Object.entries(cityObj);

    for (let [key, value] of entries) { //правя си деструкториран масив, защото всяко едно entry е масив
        console.log(`${key} -> ${value}`);
    }
}

cityProps({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

cityProps({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});