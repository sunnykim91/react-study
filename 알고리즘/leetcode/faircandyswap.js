var fairCandySwap = function(A, B) {
    let results = [];
    let temp = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            temp = A[i];
            A[i] = B[j];
            B[j] = temp;
            if (checkSum(A, B)){
                results.push(B[j]);
                results.push(A[i]);
                break;
            } else {
                temp = A[i];
                A[i] = B[j];
                B[j] = temp;
            }
        }
        if(results.length > 0) {
            break;
        }
    }

    return results;
};

function checkSum(arr1, arr2) {
    let sumA = sumArray(arr1);
    let sumB = sumArray(arr2);

    if (sumA === sumB) {
        return true;
    } else {
        return false;
    }
}

var sumArray = function(arr) {
    let sum = 0;
    for(let k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
    return sum;
}

console.log(fairCandySwap([1,1], [2,2]));
console.log(fairCandySwap([1,2], [2,3]));
console.log(fairCandySwap([2], [1,3]));
console.log(fairCandySwap([1,2,5], [2,4]));