function cmp(a, b) {
  return a - b;
}

function solution(A, B) {
  var n = A.length;
  var m = B.length;
  A.sort(cmp);
  B.sort(cmp);
  var i = 0;
  for (var k = 0; k < n; k++) {
    while (i < m - 1 && B[i] < A[k]) {
      i = i + 1;
    }
    if (A[k] == B[i]) {
      return A[k];
    }
  }
  return -1;
}

console.log(solution([3, 3], [1, 1, 2, 3]));
