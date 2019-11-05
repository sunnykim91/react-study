function solution(arr, divisor) {
  var answer = [];
  arr
    .sort((a, b) => a - b)
    .map(e => {
      if (e % divisor === 0) {
        answer.push(e);
      }
    });
  if (answer.length === 0) return [-1];
  return answer;
}
