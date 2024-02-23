let a = 10;
alert(a);
a = 20;
alert(a);


const year = alert('Год выпуска первого Iphone - 2007');

const name = alert('Имя создателя JavaScript - Brandan Eich');


//---Если задаю переменные a,b возникает конфликт---
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

let result = alert(2 ** 5);

let b = 9;
let c = 2;
alert(b % c);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert('Вам ' + age + ' лет!')



user = {
    name: 'Bob',
    age: 30,
    isAdmin: true
};


user['city of residence'] = "Moscow";

user.age = 35;

delete user['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

let username = prompt('Введите ваше имя:');
alert(`Привет, ${username} !`);