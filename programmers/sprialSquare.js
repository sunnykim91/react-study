function solution(N) {
  var answer = 0;
  let squareArr = [1, 1];
  if (N === 1) {
    answer = 4;
  }
  if (N === 2) {
    answer = 6;
  }
  let i = 2;
  while (true) {
    if (squareArr.length === N + 1) {
      break;
    }
    squareArr.push(squareArr[i - 1] + squareArr[i - 2]);
    i++;
  }
  console.log(squareArr);
  answer =
    2 * squareArr[squareArr.length - 1] + 2 * squareArr[squareArr.length - 2];
  return answer;
}

console.log(solution(5));
