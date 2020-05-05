// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);


//function decoration - можно обявлять хоть в начале
// console.log(calc(3,4));
// function calc(a,b) {
//     return (a + b);
// }

//function expression - функциональное выражение будет работать только если обьявлять в конце после прочтения функции
// let calc = function(a,b) {
//     return (a + b);
// }
// console.log(calc(3,4));

// console.log(calc(8,4));

let calc = (a,b) => a+b //можно и без фигурных скобок это стандарт es6 и более короткий,
// из минусов не имеет своего контекста вызова чащего всего встречаеться в обработчике событий

console.log(calc(3,4));

console.log(calc(8,4));


function retVar() {
    let num = 50;
    return num; //Возвращает переменную
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length); //показывает кол-во букв в слове test

console.log(str.toUpperCase()); // переводит строку в верхний регистр
console.log(str.toLocaleLowerCase());



let twelve = "12.2px";

// console.log(Math.round(twelve)); //Округляем число до 12
console.log(parseInt(twelve));
console.log(parseFloat(twelve));