//Домашняя работа 2.3

//задание 1
let password = String(prompt('Введите пароль'));

if (password === 'пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен не верно');
}




//задание 2
let c = 6;
(c >= 0 && c <= 10) ? console.log('Верно') : console.log('Не верно');





//задание 3
let d = 90;
let e = 8;

if (d > 100 || e > 100) {
    console.log('Правильно!');
} else {
    console.log('Неправильно.');
}


//задание 4
let a = '2';
let b = '3';
alert(+a + +b);




//задание 5
let month = String(prompt('Введите день месяца'));
switch (month) {
    case '1':
        alert('Январь');
        break;
    case '2':
        alert('Февраль');
        break;
    case '3':
        alert('Март');
        break;
    case '4':
        alert('Апрель');
        break;
    case '5':
        alert('Май');
        break;
    case '6':
        alert('Июнь');
        break;
    case '7':
        alert('Июль');
        break;
    case '8':
        alert('Август');
        break;
    case '9':
        alert('Сентябрь');
        break;
    case '10':
        alert('Октябрь');
        break;
    case '11':
        alert('Ноябрь');
        break;
    case '12':
        alert('Декабрь');
        break;


    default:
        alert('Что-то не то');
        break;
}