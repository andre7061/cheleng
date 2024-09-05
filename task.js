function createMap(array) {
  //создал что бы избежать дублирование в следующем задание
  const arrMap = new Map();
  array.forEach((el) => arrMap.set(el, (arrMap.get(el) || 0) + 1));
  return arrMap;
}
// Напишите функцию, которая находит уникальный элемент в массиве

const arr1 = [0, 0, 1, 1, 1, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const arr2 = ["dog", "dog", "cat", "cat", "sheep", "parrot", "parrot"];

const getUniqElement = (arr) => {
  const map = createMap(arr);
  return Array.from(map).filter((el) => el[1] == 1)[0][0];
};

console.log(getUniqElement(arr1)); //5
console.log(getUniqElement(arr2)); // 'sheep'

// Напишите функцию, которая принимает число n и возвращает n чаще всего встречающихся элементов в массиве

const getPopularItems = (arr, n) => {
  const arrMap = createMap(arr);
  return Array.from(arrMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map((el) => el[0]); 
};

console.log(getPopularItems(arr1, 2)); // [1, 3]
console.log(getPopularItems(arr1, 1)); // [1]
console.log(getPopularItems(arr2, 1)); // ['dog']
console.log(getPopularItems(arr2, 3)); // ['dog', 'cat', 'parrot']

// Напишите функцию, которая находит все подстроки с уникальными элементами в массиве
// и возвращает их количество
const arrew = [10, 8, 3, 2, 3, 1, 2, 1, 5, 6, 8, 9, 4, 3, 2, 4, 7, 8, 6, 43, 1];

const getAllSubUniqArr = (arr) => {
  const arrMap = createMap(arr);
  return Array.from(arrMap).filter((el) => el[1] == 1).length;
};

console.log(getAllSubUniqArr(arrew)); // 5
