function solve(input) {
    const farmers = {};
    const n = Number(input[0]);

    // 1. Четене на фермерите
    for (let i = 1; i <= n; i++) {
        const data = input[i].split(" ");

        const name = data[0];
        const workArea = data[1];
        const tasks = data[2].split(",");

        farmers[name] = { workArea, tasks };
    }

    // 2. Обработка на командите
    let commandsPosition = n + 1;

    while (input[commandsPosition] !== "End") {
        const data = input[commandsPosition].split(" / ");
        const command = data[0];

        if (command === "Execute") {
            const farmerName = data[1];
            const area = data[2];
            const task = data[3];

            const requestedFarmer = farmers[farmerName];

            if (
                requestedFarmer &&
                requestedFarmer.workArea === area &&
                requestedFarmer.tasks.includes(task)
            ) {
                console.log(`${farmerName} has executed the task: ${task}!`);
            } else {
                console.log(`${farmerName} cannot execute the task: ${task}.`);
            }

        } else if (command === "Change Area") {

            const farmerName = data[1];
            const newArea = data[2];

            const requestedFarmer = farmers[farmerName];
            requestedFarmer.workArea = newArea;

            console.log(`${farmerName} has changed their work area to: ${newArea}`);

        } else if (command === "Learn Task") {

            const farmerName = data[1];
            const newTask = data[2];

            const requestedFarmer = farmers[farmerName];

            if (requestedFarmer.tasks.includes(newTask)) {
                console.log(`${farmerName} already knows how to perform ${newTask}.`);
            } else {
                requestedFarmer.tasks.push(newTask);
                console.log(`${farmerName} has learned a new task: ${newTask}.`);
            }
        }

        commandsPosition++;
    }

    // 3. Финален принт
    for (const name in farmers) {
        const info = farmers[name];
        info.tasks.sort();
        console.log(`Farmer: ${name}, Area: ${info.workArea}, Tasks: ${info.tasks.join(", ")}`);
    }
}

solve([
  "2",
  "John garden watering,weeding",
  "Mary barn feeding,cleaning",
  "Execute / John / garden / watering",
  "Execute / Mary / garden / feeding",
  "Learn Task / John / planting",
  "Execute / John / garden / planting",
  "Change Area / Mary / garden",
  "Execute / Mary / garden / cleaning",
  "End"
]);

solve([
  "3",
  "Alex apiary harvesting,honeycomb",
  "Emma barn milking,cleaning",
  "Chris garden planting,weeding",
  "Execute / Alex / apiary / harvesting",
  "Learn Task / Alex / beeswax",
  "Execute / Alex / apiary / beeswax",
  "Change Area / Emma / apiary",
  "Execute / Emma / apiary / milking",
  "Execute / Chris / garden / watering",
  "Learn Task / Chris / pruning",
  "Execute / Chris / garden / pruning",
  "End"
]);