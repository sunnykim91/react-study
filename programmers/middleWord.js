function solution(s) {
  return s.length % 2 === 0
    ? s.substr(s.length / 2 - 1, 2)
    : s[Math.floor(s.length / 2)];
}
