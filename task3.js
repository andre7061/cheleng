
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Нужно вычислить следующие значения - fib(3), fib(17), fib(32)

const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(3)); // 2
console.log(fib(17)); // 1597
console.log(fib(32)); // 2178309


// 2. Задача на сортировку. Сортировка пузырьком
// Отсортировать данные массивы с помощью сортировки пузырьком: 1 - [3, 2, 10, -2, 0], 2 - [8, 16, 84, -82, 35]

let arr1 = [3, 2, 10, -2, 0];
let arr2 =[8, 16, 84, -82, 35]

const bubbleSort = (arr) => {
  let arrLength = arr.length - 1;
  do {
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    arrLength -= 1;
  } while (arrLength > 0);
  return arr
};

console.log(bubbleSort(arr1)); // [ -2, 0, 2, 3, 10 ]
console.log(bubbleSort(arr2)); // [ -82, 8, 16, 35, 84 ]

// Найти вес кратчайшего пути от начала до конца в каждом из следующих графов.
// Граф №1: 8
// Граф №2: 30