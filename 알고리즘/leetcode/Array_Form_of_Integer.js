var addToArrayForm = function (A, K) {
  let arr = '';
  let arr2 = '';
  let resultNum = '';
  for (let i = 0; i < A.length; i++){
    arr += A[i];
  }
  if( Number.isSafeInteger(Number(arr))){
    resultNum = +arr + K;
  } else {
    K = K + '';
    fTempArr = A.splice(0, A.length - K.length - 1);
    rTempArr = A.splice(A.length - K.length - 1, A.length);
    console.log(rTempArr);
    console.log(fTempArr);
    for (let o = 0; o < rTempArr.length; o++) {
      arr2 += rTempArr[o];
    }
    resultNum = parseInt(arr2) + parseInt(K);
    for (let i = 0; i < A.length; i++) {
      arr += A[i];
    }
  }
  console.log(resultNum);
  let resultArr = resultNum + '';
  let finalResult = [];
  for(let j = 0; j < resultArr.length; j++ ){
    finalResult.push(+resultArr[j]);
  }

  return finalResult;
};

// console.log(addToArrayForm([1, 2, 0, 0], 34));
// console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));