// Условия домашки 2.5 Функции

// Задание 1


// let num = Number(prompt('Введите число'));
// let numTwo = Number(prompt('Введите число'));

// let comparisonNum = (a, b) => {
//     if (a < b) {
//         return console.log(a);
//     } else {
//         return console.log(b);
//     }

// }

// comparisonNum(num, numTwo);


// Задание 2

// let num = Number(prompt('Введите число для проверки!'));

// let checkingNumbers = (evenOdd) => {
//     (evenOdd % 2 == 0) ? console.log('Четное число') : console.log('Не четное число');

// };
// checkingNumbers(num);


// Задание 3

// Задание 3.1

// let num = Number(prompt('Введите число'));

// let squareNumber = (paramNumber) => console.log(paramNumber ** 2);

// squareNumber(num);

// Задание 3.2

// let num = Number(prompt('Введите число'));

// let squareNumber = (paramNumber) => {
//     return console.log(paramNumber ** 2);
// }

// squareNumber(num);

// Задание 4 

// let question = Number(prompt('Сколько вам лет?'));

// let howManyYears = (years) => {
//     if (years < null) {
//         console.log('Вы ввели неправильное значение');
//     } else if (years <= 12) {
//         console.log('Привет, друг!');
//     } else if (years >= 13) {
//         console.log('Добро пожаловать!');
//     } else {
//         console.log('Вы ввели неправильное значение');
//     }


// }

// howManyYears(question);


// Задание 5

// let a = Number(prompt('Введите число'));
// let b = Number(prompt('Введите число'));

// let checks = (num, numTwo) => {
//     if (isNaN(num) || isNaN(numTwo)) {
//         return console.log('Одно или оба значения не являются числом');
//     } else {
//         return console.log(num * numTwo);
//     }
// }

// checks(a, b);

// Задание 6

// let userInput = prompt('Введите значение!');

// let checkingCorrectness = (cube) => {
//     if (cube == Number(cube)) {
//         return console.log(`${cube} в кубе равняется ${cube ** 3}`);
//     } else {
//         return console.log('Переданный параметр не является числом');
//     }
// }

// checkingCorrectness(userInput);

// Задание 7

// const circle = {
//     radius: 5,
//     getArea() {
//         return (`Площадь круга через радиус ровна ${3.14 * circle.radius ** 2}`);
//     }
// }


// const circleTwo = {
//     radius: 5,
//     getPerimeter() {
//         return (`Пириметр окружности равен ${2 * 3.14 * circle.radius}`);
//     }
// }

// console.log(circle.getArea());
// console.log(circleTwo.getPerimeter());config