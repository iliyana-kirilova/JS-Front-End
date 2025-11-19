function solve(arr){
    let employees = {};
    arr.forEach(name => {
        employees[name] = {
            name:name,
            id: name.length
        };
    });


    for(let name in employees){
        console.log(`Name: ${name} -- Personal Number: ${employees[name].id}`);
    }
}

solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);

solve([
'Samuel Jackson',
'Will Smith',
'Bruce Willis',
'Tom Holland'
]);
