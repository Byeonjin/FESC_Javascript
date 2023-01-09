
let repeatExpression = (ex, num) => {
  let result = Array(num).reduce(acc => acc += ex, '');
  return result;
}

console.log(repeatExpression('아우',3));