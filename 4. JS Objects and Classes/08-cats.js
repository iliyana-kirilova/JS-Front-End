function solve(arr){
    class Cat{
        constructor(name, age){
            this.name=name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let cat of arr){
        let [name, age] = cat.split(' ');
        let newCat = new Cat(name, age);
        newCat.meow();
    }
}


solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);