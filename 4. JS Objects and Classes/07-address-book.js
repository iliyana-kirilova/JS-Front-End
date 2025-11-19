function solve(arr){
    let addressBook = {};

    for(input of arr){
        let [name, address] = input.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);
    sorted.sort((a,b)=>a[0].localeCompare(b[0]));

    for(let [name, address] of sorted){
        console.log(`${name} -> ${address}`);
    }

}

solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']);

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);