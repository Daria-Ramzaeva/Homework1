
// let a = 10;
// alert(a);
// a = 20;
// alert(a);


// const year = alert('Год выпуска первого Iphone - 2007');

// const name = alert('Имя создателя JavaScript - Brandan Eich');


// //---Если задаю переменные a,b возникает конфликт---
// let x = 10;
// let y = 2;
// alert(x + y);
// alert(x - y);
// alert(x * y);
// alert(x / y);

// let result = alert(2 ** 5);

// let b = 9;
// let c = 2;
// alert(b % c);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// let age = prompt('Сколько вам лет?');
// alert('Вам ' + age + ' лет!')



// user = {
//     name: 'Bob',
//     age: 30,
//     isAdmin: true
// };


// user['city of residence'] = "Moscow";

// user.age = 35;

// delete user['city of residence'];

// let info = prompt('Какую информацию хотите узнать о пользователе?');
// alert(user[info]);

// let username = prompt('Введите ваше имя:');
// alert(`Привет, ${username} !`);


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