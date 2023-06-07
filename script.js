// const seasons = (num) => {

//     num = prompt("Введите месяц");
//     if (num == 12 || num <= 2) {
//         alert('Время года Зима!');
//     } else if (num <= 3 || num <= 5) {
//         alert('Время года Весна!');
//     } else if (num <= 6 || num <= 8) {
//         alert('Время года Лето!');
//     } else if (num <= 9 || num <= 11) {
//         alert('Время года Осень!');
//     } else {
//         alert('Этого времени года еще не придумали! Конец игре!');
//     }

// }

// const userQuestion = () => {
//     let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//     fruits = fruits.sort(() => Math.random() - 0.5);
//     alert(`Запомните первый и последний фрукт из списка ${fruits}!`);

//     let questionOne = prompt('Какой первый фрукт был в списке?');

//     let questionTwo = prompt('Какой последний фрукт был в списке?');

//     if (questionOne.toUpperCase() == fruits[0].toUpperCase() && questionTwo.toUpperCase() == fruits[fruits.length - 1].toUpperCase()) {
//         alert('Поздравляю вы угадали оба фрукта из списка!')
//     } else if (questionOne.toUpperCase() !== fruits[0].toUpperCase() && questionTwo.toUpperCase() == fruits[fruits.length - 1].toUpperCase()) {
//         alert('Увы! Вы были близки к победе! Хотите сыграть ещё?')
//     } else if (questionOne.toUpperCase() == fruits[0].toUpperCase() && questionTwo.toUpperCase() !== fruits[fruits.length - 1].toUpperCase()) {
//         alert('Увы! Вы были близки к победе! Хотите сыграть ещё?')
//     } else {
//         alert('Увы! Вы ответили не верно! Попробуем еще ра?')
//     }


// }