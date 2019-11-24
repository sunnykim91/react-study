function solution(S) {
  if (S.length !== 11) return false;
  let reg = new RegExp(/\d{3}-\d{3}-\d{3}/g);
  if (reg.test(S)) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("123-123-123"));
console.log(solution("123 123 123"));
console.log(solution("123-123-1234"));
console.log(solution("001-501-511"));
console.log(solution("123-abc-123"));
