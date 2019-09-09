const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {

    // 항상 GuGuDan안에 들어와있어야한다.
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    // setFirst는 first 전용 setState이다.
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
      e.preventDefault();
        if (parseInt(value) === first * second) {
          setResult('정답: ' + value);
          // 예전 상태를 사용하려면 함수형으로 써주면 된다.
          // setResult((prevResult) =>{
          //   return '정답: ' + value
          // })
          setFirst(Math.ceil(Math.random() * 9));
          setSecond(Math.ceil(Math.random() * 9));
          setValue('');
          // setState들이 비동기라서 한번에 React에서 알아서 렌더링 해준다.
          inputRef.current.focus();
      } else {
          setResult('떙');
          setValue('');
          inputRef.current.focus();
        }
    }

    return (
    <>
      <div>{first} 곱하기 {second}는?</div>  
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력!</button>
      </form>
      <div id='result'>{result}</div>
    </>
    )
  }

module.exports = GuGuDan;