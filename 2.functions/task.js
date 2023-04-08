function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
  return 0;
  } else {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arr.length === 0) {
  return 0;
  } else {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
      max = arr[i];
     }
     if (arr[i] < min) {
      min = arr[i];
     }
   }
  }
  let diff = max - min;
  return diff;  
  
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
    } else {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2==0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  let differ = sumEvenElement - sumOddElement;
  return differ;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
    } else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2==0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement +1;
    }
  }
  
  return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = func(...arrOfArr[i]);
    if (arr > maxWorkerResult) {
      maxWorkerResult = arr;
    }
  }
  return maxWorkerResult;
  }


