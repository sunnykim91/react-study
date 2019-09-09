// Hooks로 만들기

const React = require('react');  // 쪼갠파일에서 필요한 패키지나 라이브러리 가져오는 부분
const { useState, useRef } = React;

const WordRelay = () => {

  const [word, setWord] = useState('써니킴');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
  
}

module.exports = WordRelay; // 쪼갠 파일을 밖에서도 사용하게 해줌.


// class형

// const React = require('react');  // 쪼갠파일에서 필요한 패키지나 라이브러리 가져오는 부분
// const { Component } = React;

// class WordRelay extends Component {
//   state = {
//     word: '서니킴',
//     value: '',
//     result: '',
//   };

//   onSubmitForm = (e) => {
//     e.preventDefault();
//     if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         result: '딩동댕',
//         word: this.state.value,
//         value: '',
//       })
//       this.input.focus();
//     } else {
//       this.setState({
//         result: '땡',
//         value: '',
//       });
//       this.input.focus();
//     }
//   };

//   onChangeInput = (e) => {
//     this.setState({ value: e.target.value});
//   };

//   onRefInput = (c) => {
//     this.input = c;
//   };


//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmitForm}>
//           <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
//           <button>입력!</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     )
//   }
// }

// module.exports = WordRelay; // 쪼갠 파일을 밖에서도 사용하게 해줌.