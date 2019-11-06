const {createStore} = require('redux');

const reducer = (prevState, action) => {  // 새로운 state들을 만들어주기
  switch(action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default:  // 오타났을때 문제가 일어나므로 default를 써준다.
      return prevState;
  }
};

const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

// const nextState = {
//   ...initialState,
//   compA: action.data,
// };


const store = createStore(reducer, initialState);

store.subscribe(() => {  // react redux 안에 들어 있음.
  console.log('change!');  // 화면 바꿔주는 코드를 넣는다.
})

console.log(store.getState());

const changeCompA = (data) => {
  return {
    type: 'CHANGE_COMP_A',
    data,
  }
};

//store.dipatch({
//   type: 'CHANGE_COMP_A',
//   dat: 'b',
// })
// 위에랑 아래랑 같은거
store.dispatch(changeCompA('b'));

console.log(store.getState());

