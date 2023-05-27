const seasons = (num) => {

    num = prompt("Введите месяц");
    if (num == 12 || num <= 2) {
        alert('Время года Зима!');
    } else if (num <= 3 || num <= 5) {
        alert('Время года Весна!');
    } else if (num <= 6 || num <= 8) {
        alert('Время года Лето!');
    } else if (num <= 9 || num <= 11) {
        alert('Время года Осень!');
    } else {
        alert('Этого времени года еще не придумали! Конец игре!');
    }

}