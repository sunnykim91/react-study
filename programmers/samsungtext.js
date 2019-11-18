function solution(k,x ) {
  let sum = 0;
  for(let i=68;i<68+k;i++){
    sum += i;
  }
  console.log(sum);
}

console.log(solution(6, 353));