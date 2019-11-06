function solution(n) {
  let arr = [1, 2, 4, 11, 12, 14, 21, 22, 24, 41];
  let tempStr = '';
  let answer = '';
  let divNum = 100000000;
  while (true) {
    if (divNum === 1) {
      tempStr += (n % 10) - 1;
      console.log('1');
      console.log(divNum);
      break;
    }
    if (Math.floor(n / divNum) !== 0) {
      tempStr += Math.floor(n / divNum) -1;
      console.log('10');
      console.log(divNum);
      console.log(tempStr);
    }
    divNum = divNum / 10;
  }
  console.log(tempStr);
  for (let i = 0; i < tempStr.length; i++) {
    answer += arr[tempStr[i]];
  }
  return answer;
}

console.log(solution(222));