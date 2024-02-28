
//Домашняя работа 2.4

//Задание 1

let times = 0;
while (times < 2) {
    console.log("Привет");
    times++;
}

//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//Задание 3

for (let a = 7; a <= 22; a++) {
    console.log(a);
}

//Задание 4

const salary = {
    Коля: 'зарплата 200$',
    Вася: 'зарплата 300$',
    Петя: 'зарплата 400$',
}

for (let key in salary) {
    console.log(`${key}: ${salary[key]}`);
}


//Задание 5

for (let n = 1000, num = 5; n > 50; num++) {

    n /= 2;
    console.log(n);
}


//Задание 6

for (let i = 5; i <= 31; i += 7) {
    console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.  `);
}