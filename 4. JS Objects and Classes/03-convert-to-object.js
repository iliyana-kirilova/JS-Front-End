function objectToConvert(json){
    let person = JSON.parse(json);

    let entries = Object.entries(person);
    for (let [key, value] of entries){
        console.log(`${key}: ${value}`);
    }
}

objectToConvert('{"name": "George", "age": 40, "town": "Sofia"}');
objectToConvert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');