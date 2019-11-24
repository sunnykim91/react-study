function solution(A, K) {
  let answer = "";
  let hipenNum = Math.max.apply(null, A) + "";

  if (A.length <= K) {
    answer += makeBorder(hipenNum, A);
    answer += makeNumberLineV1(hipenNum, A);
    answer += makeBorder(hipenNum, A);
  } else {
    for (let a = 0; a < A.length / K; a++) {
      answer += makeBorder(hipenNum, K);
      answer += makeNumberLineV2(hipenNum, A, K, a * K);
    }
    if (A.length % K === 0) {
      answer += makeBorder(hipenNum, K);
    } else {
      answer += finalMakeBorder(hipenNum, A, K);
    }
  }

  process.stdout.write(answer);
}

function makeBorder(hn, temp) {
  let arr = "+";
  if (!isNaN(temp)) {
    for (let i = 0; i < temp; i++) {
      for (let j = 0; j < hn.length; j++) {
        arr += "-";
      }
      arr = arr + "+";
    }
    return arr + "\n";
  } else {
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < hn.length; j++) {
        arr += "-";
      }
      arr = arr + "+";
    }
    return arr + "\n";
  }
}

function makeNumberLineV1(hn, A) {
  let arr = "|";
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < hn.length - (A[i] + "").length; j++) {
      arr += " ";
    }
    arr += A[i] + "|";
  }
  return arr + "\n";
}

function makeNumberLineV2(hn, A, K, index) {
  let arr = "|";
  for (let i = index; i < K + index; i++) {
    if (A[i] === undefined) {
      return arr + "\n";
    }
    for (let j = 0; j < hn.length - (A[i] + "").length; j++) {
      arr += " ";
    }
    arr += A[i] + "|";
  }
  return arr + "\n";
}

function finalMakeBorder(hn, A, K) {
  let arr = "+";
  for (let i = 0; i < A.length % K; i++) {
    for (let j = 0; j < hn.length; j++) {
      arr += "-";
    }
    arr = arr + "+";
  }
  return arr + "\n";
}

// solution([4, 35, 80, 123], 10);
// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 3);
// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 3);
solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 44], 7);
