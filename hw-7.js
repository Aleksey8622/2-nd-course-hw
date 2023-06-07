// Домашние задание 2.7

// Задание 1

// let str = String(prompt('Введите слово!'));
// alert(str.toLocaleUpperCase());

// Задание 2

// const searchStart = () => {

//     const arr = ['Кошка', 'Кит', 'Комар', 'Носорог'];

//     let str = 'ко';

//     const arrStr = [];

//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].toLowerCase().includes(str.toLowerCase())) {
//             arrStr.push(arr[index])
//         }

//     }
//     return arrStr
// }
// console.log(searchStart());


// Задание 3

// let num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// Задание 4

// const num = [52, 53, 49, 77, 21, 32];

// const selectionOfnumbers = (arrMax) => {

//     console.log(Math.max(...arrMax))
//     console.log(Math.min(...arrMax))
// }

// selectionOfnumbers(num);



// Задание 5

// const randomNum = (el) => {
//     return Math.round(Math.random(el) * 10) + 1;
// }
// console.log(randomNum());

// Задание 6

// const getRandomArrNumbers = (el) => {
//     // el = prompt('Введите число')
//     let array = [];

//     for (let i = 0; i < Math.floor(el / 2); i++)
//         array.push(Math.floor(Math.random() * el));

//     return array



// }

// console.log(getRandomArrNumbers(7));



// Задание 7

// const randomRange = (valueOne, valueTwo) => {
//     return Math.floor(Math.random(valueOne) * valueTwo);
// }
// console.log(randomRange(1, 100));


// Задание 8

// let currentDate = new Date();
// console.log(currentDate);


// Задание 9

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73)
// console.log(currentDate);

// Задание 10

// function dateOutput(data) {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     let day = days[data.getDay()]
//     let month = months[data.getMonth()]
//     let year = data.getFullYear()
//     let dateStr = data.getDate()

//     let hour = data.getHours() < 10 ? '0' + data.getHours() : data.getHours();
//     let minut = data.getMinutes() < 0 ? '0' + data.getMinutes() : data.getMinutes();
//     let second = data.getSeconds() < 0 ? '0' + data.getSeconds() : data.getSeconds();
//     let time = `${hour}:${minut}:${second}`

//     console.log(`Время: ${time}`);
//     console.log(`Дата: ${dateStr} ${month} ${year} - сегодня ${day}!`);
// }
// dateOutput(new Date());