function solution(clothes) {
  var answer = 0;
  let tempArr = [];
  let firArr = [];
  let n1 = 0;
  let n2 = 0;
  for (let i = 0; i < clothes.length; i++) {
    firArr.push(clothes[i][0]);
    tempArr.push(clothes[i][1]);
  }
  n1 = firArr.length;
  n2 = tempArr.filter((item, index) => tempArr.indexOf(item) === index).length;
  if(n2 !== 1) {
    answer = (n1 * n2) - 1;
  } else {
    answer = n1;
  }
  
  return answer;
}

solution([['yellow_hat', 'headgear'], ['blue_sunglasses','eyewear'], ['green_turban', 'headgear']]);