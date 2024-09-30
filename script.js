// Напиши функцию removeElement(arr, element), которая
//  удаляет все вхождения указанного элемента из массива. 
//  Используй циклы для решения задачи.

function removeElement(arr, element) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== element) {  // Добавляем в новый массив только те элементы, которые не равны искомому
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Пример использования:
  let result = removeElement([1, 2, 3, 2, 4, 2], 2);
  console.log(result);  // [1, 3, 4]
  