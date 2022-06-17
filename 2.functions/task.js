// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    let itemArr = arr[i];
    if (itemArr < min) min = itemArr;
    if (itemArr > max) max = itemArr;
    sum = sum + itemArr;
  }

  avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

//getArrayParams(arr);

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i];
    let sum = func(arr);
    if (sum > max) max = sum;
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let difference = 0;
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let itemArr = Number(arr[i]);
    if (itemArr < min) min = itemArr;
    if (itemArr > max) max = itemArr;
  }
  difference = Math.abs(min - max);

  return difference;
}

