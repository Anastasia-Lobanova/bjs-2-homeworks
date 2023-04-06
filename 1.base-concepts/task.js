"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [(-b + Math.sqrt(d))/(2*a)];
  } else {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a) ;
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (percent < 0 || isNaN(percent)) {
    return "Параметр Процентная ставка содержит неправильное значение";
  } else if (contribution < 0 || isNaN(contribution)) {
    return "Параметр Cумма первоначального взноса содержит неправильное значение";
  } else if (amount < 0 || isNaN(amount)) {
    return "Параметр Сумма кредита содержит неправильное значение";
  } else {
  let S = amount - contribution; // тело кредита
  let P = percent / 100 / 12; // 1/12 процентной ставки
  let n = countMonths;
  let monthAmount = S * ( P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = (monthAmount * n).toFixed(2);
  return +totalAmount;
  }
}


