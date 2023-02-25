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
  let S = amount - contribution; // тело кредита
  let P = percent / 100 / 12; // 1/12 процентной ставки
  let n = ountMonths;

  if ((percent < 0 ||  contribution < 0 || amount < 0 || n < 0 ) || 
    (isNaN(percent) === true|| isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true)) {
        return "Ошибка данные введены неверно";
    }

  let monthAmount = S * ( P + P / (((1 + P) ** n) - 1));
  let totalAmount = monthAmount * n;

  return totalAmount.toFixed(2);
}