let money = +prompt("Ваш бюджет на месяц?", ''), // унарныый плюс превращает строку в символ вроде бы...
    time = prompt('Введите дату', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
//проверка того что этот цикл строка с помощью typeof потом проверка на отмену пользователем потом запрет на пустое поле потом запрет на количество символов не больше 50
for (let i = 0; i < 2; i++) { // I < 2 - ЭТО ТО УСЛОВИЕ ПРИ КОТОРОМ ЦИКЛ ОСТАНОВИТ РАБОТУ, ПОТОМ ЧТО БУДЕТ ПРОИСХОДИТЬ В НОВОМ ЦИКЛЕ I++ УВЕЛИЧИВАТЬСЯ НА 1
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдеться?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length <50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
};


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюжет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}