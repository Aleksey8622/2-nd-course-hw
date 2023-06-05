const userQuestion = () => {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(`Запомните первый и последний фрукт из списка ${fruits}!`);

    let questionOne = prompt('Какой первый фрукт был в списке?');

    let questionTwo = prompt('Какой последний фрукт был в списке?');

    if (questionOne.toUpperCase() == fruits[0].toUpperCase() && questionTwo.toUpperCase() == fruits[fruits.length - 1].toUpperCase()) {
        alert('Поздравляю вы угадали оба фрукта из списка!')
    } else if (questionOne.toUpperCase() !== fruits[0].toUpperCase() && questionTwo.toUpperCase() == fruits[fruits.length - 1].toUpperCase()) {
        alert('Увы! Вы были близки к победе! Хотите сыграть ещё?')
    } else if (questionOne.toUpperCase() == fruits[0].toUpperCase() && questionTwo.toUpperCase() !== fruits[fruits.length - 1].toUpperCase()) {
        alert('Увы! Вы были близки к победе! Хотите сыграть ещё?')
    } else {
        alert('Увы! Вы ответили не верно! Попробуем еще ра?')
    }


}
