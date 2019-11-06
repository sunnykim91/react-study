function digitChange(n) {
  let tempArr = [];

  while (true) {
    if (n === 1) {
      tempArr.unshift(1);
      break;
    }
    if (n % 2 === 0) {
      tempArr.unshift(n % 2);
    } else {
      tempArr.unshift(n % 2);
    }
    n = Math.floor(n / 2);
  }

  return tempArr;
}

function solution(n) {
  var answer = 0;
  let originArr = [];
  let compArr = [];
  let originCount = 0;
  let compCount = 0;
  while (true) {
    originArr = digitChange(n);
    compArr = digitChange(n + 1);
    n++;
    for (let i = 0; i < originArr.length; i++) {
      if (originArr[i] === 1) {
        originCount++;
      }
    }
    for (let i = 0; i < compArr.length; i++) {
      if (compArr[i] === 1) {
        compCount++;
      }
    }
    if (originCount === compCount) {
      answer = n;
      break;
    }
  }
  return answer;
}