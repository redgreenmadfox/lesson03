let money = 60000,
    income = 'фриланс',
    addExpenses = 'интернет, такси, коммуналка',
    deposit = true,
    mission = 10000000,
    period = 6;
/*
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
    
console.log(addExpenses.length);
    
console.log('период равен ' + period + ' месяцев');
    
console.log(addExpenses.toLocaleLowerCase().split(','));
    
let budgetDay = money / 30;
console.log(budgetDay);
*/
money = prompt('Ваш ежемесячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов');
let ammount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let ammount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - ammount1 - ammount2;
console.log(budgetMonth);

let missionTime = Math.ceil(mission / budgetMonth);
console.log(missionTime);

let budgetDay = budgetMonth / 30;
console.log(budgetDay);
if(budgetDay >= 1200){
    console.log('you have high level of income');
} else if(budgetDay < 1200 && budgetDay >= 600){
    console.log('you have medium level of income');
} else if(budgetDay < 600){
    console.log('you have low level of income');
} else if(budgetDay < 0){
    console.log('something went wrong');
}