function solve() {
    let textInput = document.querySelector("div#inputs>textarea");
    let data = JSON.parse(textInput.value);

    let restaurants ={};
    //обхождам масива и вземам името на ресторанта и данните за работниците
    for(let element of data){
        let [restaurant, workersData] = element.split(" - ");
        //правя си списък с работниците и теьните заплати
        let workersList = workersData.split(", ");

        //проверявам дали ресторанта съществува, ако не създавам нов
        if (!restaurants[restaurant]) {
        restaurants[restaurant] = { //създавам обект ресторант със служители, средна и най-добра заплата
            workers: [], 
            averageSalary: 0, 
            bestSalary: 0 };
        }
        
        //обхождам списъка, за да взема всеки един работник и да го добавя към обекта
        for (let entry of workersList){
            let[worker, salary] = entry.split(" ");
            restaurants[restaurant].workers.push({
                name:worker, 
                salary: Number(salary)});
        }
    }

    // обхождам рестораните, за да изчисля средната и най-добрата заплата
    for(let restaurantName in restaurants){
        //правя списък с всички работниците
        let workers = restaurants[restaurantName].workers;

        //сортирам работниците по заплата (низходящо)
        workers.sort((a, b) => b.salary - a.salary);

        //правя масив от заплатите
        let salaries = workers.map(w=>w.salary);

        //изчислявам средната и най-добрата заплата
        if(salaries.length===0){
            restaurants[restaurantName].averageSalary = 0;
            restaurants[restaurantName].bestSalary = 0;    
        }else{
            let averageSalary = salaries.reduce((a, b) => a + b, 0) / salaries.length;
            let bestSalary = Math.max(...salaries);

            //записваме стойностите
            restaurants[restaurantName].averageSalary = averageSalary;
            restaurants[restaurantName].bestSalary = bestSalary;  
        }     
    }

    //намирам ресторанта с най-добра средна работна заплата
    let bestAvrSalary = 0;
    let bestRestaurantName = null;
    for( let name in restaurants){
        if(restaurants[name].averageSalary>bestAvrSalary){
            bestAvrSalary=restaurants[name].averageSalary;
            bestRestaurantName = name;
        }
    }

    //покаване на информацията в HTML
    let bestRestaurant = document.querySelector("div #bestRestaurant>p");
    let workersHtml = document.querySelector("div #workers>p");

    let best = restaurants[bestRestaurantName];

    //показване на ресторанта
    bestRestaurant.textContent = `Name: ${bestRestaurantName} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

    // Показваме работниците
    workersHtml.textContent = best.workers
    .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
    .join(" ");

}