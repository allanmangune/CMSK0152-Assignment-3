function calculateNumberToothbrushForLife(age, amountPerMonth){
    let maxAge = 100;
    let yearlyConsumption = amountPerMonth * 12;
    let estimateLifespanConsumption = 0;
    let database = new ToothbrushData();
    for(counter = age; counter <= maxAge; counter++){
        database.addToothbrush(yearlyConsumption);
    }
    database.data.forEach((dat)=>{
        estimateLifespanConsumption = estimateLifespanConsumption + dat;
    });
    console.log(`You will need ${estimateLifespanConsumption} toothbrushes to last you until the age of ${maxAge}`);
}

let ana = new Person();
ana.age = 99;
ana.amountPerMonth = 1;
calculateNumberToothbrushForLife(ana.age, ana.amountPerMonth);

let john = new Person(98, 1);
calculateNumberToothbrushForLife(john.age, john.amountPerMonth);