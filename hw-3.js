// Домашнее задание 2.3 "Условное ветвление"


// Задание 1
// let password = 'пароль';
// let question = prompt('Введите пароль');
// (question === password) ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

// Задание 2
// let input = Number(prompt('Введите любое число!'));
// let number = input;
// (number > 0 && number < 10) ? console.log('Верно') : console.log('Неверно');

// Задание 3
// let d = Number(prompt('Введите число'));
// let e = Number(prompt('Введите число'));
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else if (d < 100 || e < 100) {
//     console.log('Неверно');
// }

// Задание 4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

// Второе решение задания 4
// Задание 4
// let a = '2';
// let b = '3';
// let c = Number(a);
// let d = Number(b);
// alert(c + d);


// Задание 5
// let monthNumber = Number(prompt('Введите номер месяца!'));
// switch (monthNumber) {
//     case 1:
//         console.log('Месяц январь');
//         break;
//     case 2:
//         console.log('Месяц февраль');
//         break;
//     case 3:
//         console.log('Месяц март');
//         break;
//     case 4:
//         console.log('Месяц апрель');
//         break;
//     case 5:
//         console.log('Месяц май');
//         break;
//     case 6:
//         console.log('Месяц июнь');
//         break;
//     case 7:
//         console.log('Месяц июль');
//         break;
//     case 8:
//         console.log('Месяц август');
//         break;
//     case 9:
//         console.log('Месяц сентябрь');
//         break;
//     case 10:
//         console.log('Месяц октябрь');
//         break;
//     case 11:
//         console.log('Месяц ноябрь');
//         break;
//     case 12:
//         console.log('Месяц декабрь');
//         break;
//     default:
//         console.log('Введено не верное значение');
//         break;
// }

// Дополнительная практика

// Задание 7

// let namber = Number(prompt('Пожалуйста, введите любое число'));
// if (namber % 2 == 0) {
//     alert('Число четное')
// } else {
//     alert('Число нечетное')
// }

// Задание 8
// let clientOS = Number(prompt('Выберите версию приложение (0 — iOS, 1 — Android)'));
// if (clientOS === 0) {
//     alert('Установите версию приложения для iOS по ссылке')
// } else if (clientOS === 1) {
//     alert('Установите версию приложения для Android по ссылке');
// }


// Задание 9
// let clientOS = Number(prompt('Выберите версию приложение (0 — iOS, 1 — Android)'));
// let clientDeviceYear = Number(prompt('Введите год прозводства вашего устройства'));
// if (clientOS == 0 && clientDeviceYear >= 2015) {
//     alert('Установите версию приложения для iOS по ссылке');
// } else if (clientOS == 0 && clientDeviceYear <= 2015) {
//     alert('Установите облегченную версию приложения для iOS по ссылке');
// }
// if (clientOS == 1 && clientDeviceYear >= 2015) {
//     alert('Установите версию приложения для Android по ссылке');
// } else if (clientOS == 1 && clientDeviceYear <= 2015) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// } 
