function solution(point) {
  const points = point.match(/\d+[SDT][#\*]?/g);
  console.log(points);
  let prev = 0;
  let a = points.reduce((acc, el, index) => {
    const [origin, bonus, option] = el.match(/\d+|[SDT]|[#\*]/g);
    let temp = +origin;
    if (bonus === "D") {
      temp = Math.pow(temp, 2);
    } else if (bonus === "T") {
      temp = Math.pow(temp, 3);
    }
    if (option === "#") {
      temp *= -1;
    } else if (option === "*") {
      temp *= 2;
      if (index > 0) {
        acc += prev;
      }
    }
    prev = temp;
    return acc + temp;
  }, 0);
  return a;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
