var singleNumber = function (nums) {
  let result = 0;
  nums.forEach(num => console.log(result, num, result ^= num));
  console.log(5 ^ 0);  // 0101  0000 -> 0101
  console.log(5 ^ 1);  // 0101 0001 -> 0 1 0 0
  console.log(5 ^ 2);  // 0101 0010 -> 0111
  console.log(5 ^ 3);  // 0101 0011 -> 0110
  return result;
};

singleNumber([4, 1, 2, 1, 2]);

