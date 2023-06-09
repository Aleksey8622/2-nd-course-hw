// 2.8 Callback, setTimeout, setInterval

// Задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];


//  console.log(people.sort((a, b) => a.age > b.age ? 1 : -1));

//  [
//   { name: 'Олег', age: 7 },
//   { name: 'Анна', age: 17 },
//   { name: 'Глеб', age: 29 },
//   { name: 'Оксана', age: 47 }
//  ]

// Задание 2
// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// function isPositive(arr) {
//     return arr > 0;
// }
// function isMale(people) {
//     return people.gender == 'male';
// }
// function filter(arr, collback) {
//     const mass = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (collback(arr[i])) {
//             mass.push(arr[i])
//         }
//     }
//     return mass
// }

// console.log(filter([3, -4, 1, 9], isPositive)); 
// console.log(filter(people, isMale));

// Задание 3

// let time = new Date();
// const timeOutput = (deadline) => {
//     const interval = setInterval(() => {
//         console.log(time);
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд пошло')
//     }, deadline * 10000)
// }

// timeOutput(3);

// Задание 4

// function delayForSecond(callback) {
//     setTimeout(callback, 1000)

// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) { cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// sayHi('Глеб', delayForSecond());