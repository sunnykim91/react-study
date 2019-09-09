const React = require('react');
const { useState, useRef } = React;

const rightNum = () => {
    const [value, setValue] = useState(Math.ceil(Math.random()*9));
    const [inputNum, setInputNum] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === parseInt(inputNum)) {
            setResult('정답');
            setValue(Math.ceil(Math.random()*9));
            setInputNum('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue(Math.ceil(Math.random()*9));
            setInputNum('');
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setInputNum(e.target.value);
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <label>숫자를 맞추세요(숫자는 1~9)</label>
                <input ref={inputRef} value={inputNum} onChange={onChangeInput} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = rightNum;