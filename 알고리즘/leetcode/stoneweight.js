let i = 0;
var lastStoneWeight = function (stones) {
  
  while(true) {
    stones.sort((a, b) => b - a);
    if(stones.length <= 1){
      break;
    } else {
      stoneChange(stones);
    }
    i++;
  }
  return stones;
};

function stoneChange(arr){
  if (arr[i] !== arr[i + 1]) {
      arr[i] = arr[i] - arr[i + 1];
      arr.splice(i + 1, 1);
    } else {
      arr.splice(i, 2);
    }
    console.log(arr);
  
  return arr;
}


console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));  // 8 7 4 2 1 1

const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    const remainStone = stones.shift() - stones.shift();
    if (remainStone) stones.push(remainStone);
  }
  return stones[0] ? stones[0] : 0;
};