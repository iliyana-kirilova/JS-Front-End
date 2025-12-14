function solve(input){
    const astronautsNumber = Number(input[0]);
    const astronauts ={};

    for(let i=1; i<=astronautsNumber; i++){
        const data = input[i].split(" ");

        const name = data[0];
        const spacecraftSection = data[1];
        const skills = data[2].split(",");

        astronauts[name] = {spacecraftSection, skills};
    }

    let commandsPosition = astronautsNumber+1;
    while(input[commandsPosition] !== "End"){
        const commandData = input[commandsPosition].split(" / ");
        const command = commandData[0];

        if(command ==="Perform"){
            const astronautName = commandData[1];
            const section = commandData[2];
            const skill = commandData[3];

            const requestedAstronaut = astronauts[astronautName];

            if(requestedAstronaut &&
                requestedAstronaut.spacecraftSection === section &&
                requestedAstronaut.skills.includes(skill)
            ){
                console.log(`${astronautName} has successfully performed the skill: ${skill}!`);  
            }else{
                console.log(`${astronautName} cannot perform the skill: ${skill}.`);  
            }
        }else if(command ==="Transfer"){
            const astronautName = commandData[1];
            const newSection = commandData[2];

            const requestedAstronaut = astronauts[astronautName];
            requestedAstronaut.spacecraftSection = newSection;

            console.log(`${astronautName} has been transferred to: ${newSection}`);
        }else if(command ==="Learn Skill"){
            const astronautName = commandData[1];
            const newSkill = commandData[2];
            const requestedAstronaut = astronauts[astronautName];

            if(requestedAstronaut.skills.includes(newSkill)){
                console.log(`${astronautName} already knows the skill: ${newSkill}.`);
            } else{
                requestedAstronaut.skills.push(newSkill);
                console.log(`${astronautName} has learned a new skill: ${newSkill}.`);
            }
        }

        commandsPosition++;
    }

    for(const name in astronauts){
        const info = astronauts[name];
        info.skills.sort();
        console.log(`Astronaut: ${name}, Section: ${info.spacecraftSection}, Skills: ${info.skills.join(", ")}`);  
    }
}

solve([
  "2",
  "Alice command_module piloting,communications",
  "Bob engineering_bay repair,maintenance",
  "Perform / Alice / command_module / piloting",
  "Perform / Bob / command_module / repair",
  "Learn Skill / Alice / navigation",
  "Perform / Alice / command_module / navigation",
  "Transfer / Bob / command_module",
  "Perform / Bob / command_module / maintenance",
  "End"
]);

solve([
  "3",
  "Tom engineering_bay construction,maintenance",
  "Sara research_lab analysis,sampling",
  "Chris command_module piloting,communications",
  "Perform / Tom / engineering_bay / construction",
  "Learn Skill / Sara / robotics",
  "Perform / Sara / research_lab / robotics",
  "Transfer / Chris / research_lab",
  "Perform / Chris / research_lab / piloting",
  "Learn Skill / Tom / diagnostics",
  "Perform / Tom / engineering_bay / diagnostics",
  "End"
]);