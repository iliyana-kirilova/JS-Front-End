function solve(input){
    const n = Number(input[0]);
    const chemicals = {};

    for(let i=1; i<=n; i++){
        const data = input[i].split(" # ");
        const name = data[0];
        const quantity = Number(data[1]); 

        chemicals[name] = {quantity: quantity};
    }

    let commandPosition = n+1;

    while(input[commandPosition]!=="End"){
        const data = input[commandPosition].split(" # ");
        const command = data[0];

        if(command==="Mix"){
            const firstChemical = data[1];
            const secondChemical = data[2];
            const amount = Number(data[3]);

            const firstChemicalAmount = chemicals[firstChemical].quantity;
            const secondChemicalAmount = chemicals[secondChemical].quantity;

            if(firstChemicalAmount>=amount && secondChemicalAmount>=amount){
                console.log(`${firstChemical} and ${secondChemical} have been mixed. ${amount} units of each were used.`);

                chemicals[firstChemical].quantity -= amount;
                chemicals[secondChemical].quantity -= amount;
            }else{
                console.log(`Insufficient quantity of ${firstChemical}/${secondChemical} to mix.`);
            }
        }else if(command==="Replenish"){
            const chemicalName = data[1];
            const amount = Number(data[2]);

            const requestedChemical = chemicals[chemicalName];
            if(!requestedChemical){
                console.log(`The Chemical ${chemicalName} is not available in the lab.`);
            } else if (requestedChemical.quantity +amount>500){
                const addedAmount = 500 - requestedChemical.quantity; 
                requestedChemical.quantity = 500;
                console.log(`${chemicalName} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
            } else{
                console.log(`${chemicalName} quantity increased by ${amount} units!`);
                requestedChemical.quantity += amount;
            }
        }else if(command==="Add Formula"){
            const chemicalName = data[1];
            const formula = data[2];

            const requestedChemical = chemicals[chemicalName];
            if(!requestedChemical){
                console.log(`The Chemical ${chemicalName} is not available in the lab.`);
            }else{
                requestedChemical.formula = formula;
                console.log(`${chemicalName} has been assigned the formula ${formula}.`)
            }
        }

        commandPosition++;
    }

    for(const name in chemicals){
        const chemical = chemicals[name];

        if(!chemical.formula){
            console.log(`Chemical: ${name}, Quantity: ${chemical.quantity}`);
        } else{
            console.log(`Chemical: ${name}, Quantity: ${chemical.quantity}, Formula: ${chemical.formula}`);
        }
    }



}
solve([ '4',
  'Water # 200',
  'Salt # 100',
  'Acid # 50',
  'Base # 80',
  'Mix # Water # Salt # 50',
  'Replenish # Salt # 150',
  'Add Formula # Acid # H2SO4',
  'End']);

solve([ '3',
  'Sodium # 300',
  'Chlorine # 100',
  'Hydrogen # 200',
  'Mix # Sodium # Chlorine # 200',
  'Replenish # Sodium # 250',
  'Add Formula # Sulfuric Acid # H2SO4',
  'Add Formula # Sodium # Na',
  'Mix # Hydrogen # Chlorine # 50',
  'End']);