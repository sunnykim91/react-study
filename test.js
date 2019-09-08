function alphabet(str) {
  const alphaArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let result = [];
  for (el in alphaArr) {
    result.push(str.indexOf(alphaArr[el]));
  }
  console.log(...result);
}

alphabet("baekjoon");
