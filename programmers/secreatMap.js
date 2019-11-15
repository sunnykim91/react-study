function solution(n, arr1, arr2) {
    let answer=[];
    let tempArr=[];
    let realAn=[];
    arr1 = arr1.map(el => el.toString(2));
    arr2 = arr2.map(el => el.toString(2));

    console.log(arr1, arr2);

    for(let k=0;k<arr1.length;k++){
      if (arr1[k].length === n) {
        continue;
      } else{
        while(arr1[k].length < n){
          arr1[k] = '0' + arr1[k];
        }
      }
    }

  for (let k = 0; k < arr2.length; k++) {
    if (arr2[k].length === n) {
      continue;
    } else {
      while (arr2[k].length < n) {
        arr2[k] = '0' + arr2[k];
      }
    }
  }

    console.log(arr1);
    console.log(arr2);

    for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++){
        tempArr.push(arr1[i][j] | arr2[i][j]);
      }
    }
    console.log(tempArr);
    for(let l=0;l<tempArr.length; l = l + n ){
      answer.push(tempArr.slice(l,l+n));
    }

    answer= answer.map(a => a.map(b => b===1? b='#': b=' '));
    
    let temp = '';
    for(let a=0;a<answer.length;a++){
      for(let b=0;b<answer.length;b++) {
        temp += answer[a][b];
      }
      realAn.push(temp);
      temp = '';
    }
    console.log(realAn);
    return realAn;
}

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));