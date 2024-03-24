"use strict"

// zadacha1+

// Выведи все элементы массива в консоль с помощью метода forEach .
// Реализуйте решение двумя способами, используя function declaration & arrow function


// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// fibonacci.forEach((element) => console.log(element));
// fibonacci.forEach (function (element) {
//     console.log(element)
// } )

// zadacha2+

// Используя метод map создайте новый массив, на основе массива users , в котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc] .
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// Реализуйте решение двумя способами, используя function declaration & arrow function.


// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// let result = users.map(function (value, index) {
//     return ('member ' + `${index + 1}` + ':'+`${value}`);
// })
// console.log(result);


// let resultArrow = users.map((value, index) => {return ('member ' + `${index + 1}` + ':'+`${value}`);
// })
// console.log(resultArrow);


// zadacha3+

// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
// const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя function declaration & arrow function.



// const numbers = [7, -4, 32, -90, 54, 32, -21]
// let positiveNumbers = numbers.filter(function (item) {
//     return item > 0
// });

// console.log(positiveNumbers);

// let positiveNumbersArrow = numbers.filter((item) => { return item > 0 });

// console.log(positiveNumbersArrow);


// Задача 4.+
// Используя метод reduce получите сумму всех чисел массива.
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


// Реализуйте решение двумя способами, используя function declaration & arrow function.


// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// const fibonacciTotal = fibonacci.reduce(function(totalSumm, item) {
//     totalSumm += item;
//     return totalSumm;
// }, 0);
// console.log(fibonacciTotal);

// const fibonacciTotalArrow = fibonacci.reduce((totalSumm, item) => {
//     totalSumm += item;
//     return totalSumm;
// }, 0);
// console.log(fibonacciTotalArrow);


// Задача 5.+
// Используя метод find найдите в массиве первое четное число.
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// let firstEvenNumber = numbers.find(function(item) {
//     return item % 2 == 0
// })
// console.log(firstEvenNumber);

// let firstEvenNumberArrow = numbers.find((item) => {return item % 2 == 0})

// console.log(firstEvenNumberArrow);



// Продвинутый уровень


// Задача 1.-
// Написать функцию конструктор Student
// В каждом объекте студента должны быть поля salary , rate , name
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
// На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.
// Создать массив students и поместить в него студентов.
// Написать функцию, которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.
// rate имеет 4 категории A B C D:
// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

// function Student(name, salary, rate) {
//   this.salary = salary;
//   this.rate = rate;
//   this.name = name;

//   function sumCredit() {
//     if (rate = "A"){
//     return sumCredit = 12 * salary
//   }
//   if (rate = "B"){
//     return sumCredit = 9 * salary
//   }
//   if (rate = "C"){
//     return sumCredit = 6 * salary
//   }
//   if (rate = "D"){
//     return sumCredit = 0 * salary
//   }
// console.log(sumCredit);
// }}

// let user = new Student("Сергей", 10000, "A");
// // let user = new Student("Андрей", 9000, "B");
// // new Student("Глеб", 11000, "A");
// // new Student("Антон", 7000, "D");
// // new Student("Виктория", 7500, "С");
// console.log(user);


// Задача 2.+
// Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».
// Примечание: для этой задачи y не считается гласной.


// function stringWithout(str) {
//   let vowels = ['а', 'е', 'и', 'о', 'у', 'э', 'ю', 'я'];
//   let strWithoutVowels = str.split('').map(el => vowels.includes(el.toLowerCase()) ? el = '' : el)
//   console.log(strWithoutVowels.join('')); 
// }

// stringWithout('ПрИвет СергЕй')

// Задача 3.+
// Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
// accum('abcd') // -> 'A-Bb-Ccc-Dddd'
// accum('RqaEzty') // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum('cwAt') // -> 'C-Ww-Aaa-Tttt'
// Параметр — это строка, которая включает только буквы от a...z и A...Z.


// function accum(str) {
//   let strWithoutVowels = str.split('').map(el => el.toUpperCase())
//   let cloneCount = 0; 
//   let arr = []
//   for(let i = 0; i < strWithoutVowels.length; i++){
//       let arrayWithCorrectLetter = Array(cloneCount).fill(strWithoutVowels[i].toLowerCase())
//       arrayWithCorrectLetter.unshift(strWithoutVowels[i].toUpperCase())
//       cloneCount ++;
//       arr.push(arrayWithCorrectLetter.join(''))
//   }
//   console.log(arr.join('-')) 
// }
// accum('cwAt');

// Задача 4.+
// Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
// highAndLow = ('1 2 3 4 5') // return '5 1'
// highAndLow('1 2 -3 4 5') // return '5 -3'
// highAndLow('1 9 3 4 -5') // return '9 -5'
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.



// let highAndLow = ('1 2 3 4 5') // return '5 1'
// let highAndLow = ('1 2 -3 4 5') // return '5 -3'
// let highAndLow = ('1 9 3 4 -5') // return '9 -5'
// let arrHighAndLow = highAndLow.split(' ')
// const maxValue = Math.max(...arrHighAndLow)
// const minValue = Math.min(...arrHighAndLow)
// console.log(`'${maxValue} ${minValue}'`)



// Задача 5.+-
// Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// let isIsogram = (str) => (str.toLowerCase().split("").every((c, i) => str.indexOf(c) == i));

// console.log(isIsogram("moOse"));


// Задача 6.-
// Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную total1 .
// Затем замените все числа 7 на число 1 и назовите это число total2 .
// После верните разницу между суммой цифр total1 и total2 .
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667



// Задача 7.-
// Дубликаты
// Цель этого упражнения — преобразовать строку в новую строку, где каждый
// символ в новой строке равен ( , если этот символ появляется только один раз в
// исходной строке, или ) , если этот символ встречается более одного раза в
// исходной строке. Игнорируйте использование заглавных букв при определении
// дубликата символа.
// 'din' // => '((('
// "recede" // => '()()()'
// 'Success' // => ')())())'
// '(( @' // => '))(("'

