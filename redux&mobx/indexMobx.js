const { observable, autorun, runInAction } = require("mobx");

const state = observable({
  compA: "a",
  compB: 12,
  compC: null
});

autorun(() => {
  console.log("changed", state.compA);
}); // observable에 들어있는 것, 즉 state가 변경될때마다 callback함수가 실행된다.

runInAction(() => {
  state.compA = "c"; // 이런 동작하나하나가 redux의 action이 된다. 이걸 observable이 안다.
  state.compB = "c";
  state.compC = "c";
});

runInAction(() => {
  state.compC = "d";
});
