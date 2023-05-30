// Домашние задание 2.5 МАССИВЫ!!!

// Задание 1

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i] == 10)
//         break;
//     console.log(numbs[i]);
// }

// Задание 2

// const numbs = [1, 5, 4, 10, 0, 3];
// let a = 0;
// numbs.forEach((el, index) => {
//     if (el == 4) {
//         a = index;
//     }
// });

// console.log(a);


// Задание 3


// const numbs = [1, 3, 5, 10, 20];

// console.log(numbs.join('  '));


// Задание 4

// const arr = [];
// for (let a = 0; a < 3; a++) {
//     arr[a] = [1, 1];
//     for (let b = 0; b < 1; b++) {
//         arr[a].push(1);

//     }
// }
// console.log(arr);

// Задание 5

// const num = [1, 1, 1];

// num.push(2, 2, 2)

// console.log(num);

// Задание 6

// const num = [9, 8, 7, 'a', 6, 5];
// num.sort().pop();
// console.log(num);

// Задание 7


// const arr = [9, 8, 7, 6, 5];
// let num = Number(prompt('Введите число от 1 до 10'));
// if (arr.includes(num)) {
//     console.log(`Число ${num} есть в массиве`);
// } else {
//     console.log('Токого числа нет!');
// }


// Задание 8

// const str = 'abcdef';
// const arr = str.split('');
// console.log(arr.reverse().join(''));


// Задание 9

// const arr = [[1, 2, 3,], [4, 5, 6]];
// let combiningArray = [].concat(...arr);
// console.log(combiningArray);




// Задание 10

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }




// Задание 11

// const num = [2, 4, 6, 8, 10];

// const result = num.map(el => el ** 2);
// console.log(result);


// Задание 12
// const arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// let result = arr.map(el => el.length);
// console.log(result);


// Задание 13

// const arr = [-1, 0, 5, -10, 56]
// let result = arr.filter(el => el < 0);
// console.log(result);