"use strict"

// zadacha1

// const colors = ['red', 'green', 'blue']
// console.log(colors.length);


// zadacha 2
// const animals = ['monkey', 'dog', 'cat']
// const lastElement = animals[animals.length - 1];
// console.log(lastElement);


// zadacha 3
// const numbers = [5, 43, 63, 23, 90]
// console.log(numbers);
// console.log(numbers.splice(0, 5)); //?
// numbers.length = 0;
// console.log(numbers);



// zadacha 4

// const students = ['Polina', 'Dasha', 'Masha'];

// console.log(students);
// students.pop()
// console.log(students);
// students.push('Borya')
// console.log(students);
// students.shift()
// console.log(students);
// students.unshift('Andrey')
// console.log(students);

// console.log(students);
// students[2] = 'Borya';
// console.log(students);
// students[0] = 'Andrey';
// console.log(students);



// zadacha 5

// const cats = ['Gachito', 'Tom', 'Batman'] 
//     for (let i = 0; i < cats.length; i++) {
//         console.log(cats[i]);
//     }

//     for (const catsItem of cats) {
//         console.log(catsItem);
//     }


// zadacha 6


// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const combinedArray = evenNumbers.concat(oddNumbers);

// console.log(combinedArray);

// console.log(combinedArray.indexOf(8)); 


// zadacha7

// const binary = [0, 0, 0, 0]
// const strBinary = binary.join('1');
// console.log(strBinary);



// Продвинутый уровень
// Для решения задач используйте циклы for или for..of


// Задача 1.
// Реализуйте функцию, которая будет проверять, является ли слово палиндромом.

// zadacha1.1 

// let word = prompt('Введите слово для проверки');
// console.log(word);
// function palindrom() {
//     let wordReverse = word.split("").reverse().join("");
//     console.log(wordReverse);
//     if (word === wordReverse) {
//         console.log('Слово палиндром');
//     } else {
//         console.log('Слово не палиндром');
//     }
// }
// palindrom(word)


// Выведите в консоль среднее значение чисел в многомерном массиве.

// zadacha1.2

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// const getAverage = (matrix) => {
//     let sum = 0;
//     let sumLength = 0
//     for (let i = 0; i < matrix.length; i ++) {
//         for (let j = 0; j < matrix[i].length; j ++) {
//             sum += matrix[i][j];
//         }
//         sumLength += matrix[i].length
//     }
//     console.log(sum);
//     console.log(sumLength);
//     return sum / sumLength; 
// };

// console.log(getAverage(matrix)); 


// Задача 3.
// Дан массив:
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.


// zadacha1.3

// const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
// let arr1 = [];
// let arr2 = [];

// function array() {
//     for (let i = 0; i < mixedNumbers.length; i++) {
//         if (mixedNumbers[i] >= 0) {
//             arr1.push(mixedNumbers[i]);
//         } else {
//             arr2.push(mixedNumbers[i]);
//         }
//     }
// };
// array();
// console.log(arr1);
// console.log(arr2);

// Задача 4.
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм, который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.


// let arr = [];
// let arrX = [];

// for (let i = 0; i < 6; i++) {
//     arr.push(Math.trunc(Math.random()*100));
//     arrX.push(arr[i]**3)
// }
// console.log(arr);
// console.log(arrX);
