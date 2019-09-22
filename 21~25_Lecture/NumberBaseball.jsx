import React, {useState, createRef } from 'react';
// import React, {Component} from 'react';
import Try from './Try';


// hooks
function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0;i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => {
                return [...prevTries, {try: value, result: '홈런!'}]
            });
            alert('게임을 다시 시작합니다.!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            this.inputRef.current.focus();
        } else {  // 답이 틀렸다면
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게틀려서 실패! 답은 ${answer.join(',')}였습니다.`);
                alert('게임을 다시 시작합니다.!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                this.inputRef.current.focus();
            } else {
                for (let i = 0; i < 4; i+= 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼 입니다.`}]
                });
                setValue('');
                this.inputRef.current.focus();
            }
        }
    }; 

    const onChangeInput = (e) => {
        console.log(answer);
        setValue(e.target.value);

    };

    inputRef = createRef();  // this.inputRef

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={this.inputRef} maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length} </div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
                    ); // return 생략가능   
                })}
            </ul>
        </>
    )
}


export default NumberBaseball;  //import Numberbaseball;


// class NumberBaseball extends Component {

//     state = {
//         result: '',
//         value: '',
//         answer: getNumbers(),  // ex: [1,3,5,7]
//         tries: [],
//     };

//     onSubmitForm = (e) => {
//         e.preventDefault();
//         if (this.state.value === this.state.answer.join('')) {
//             this.setState( (prevState) =>  {
//                 return {
//                     result: '홈런!',
//                     tries: [...prevState.tries, { try: this.state.value, result: '홈런!'}],
//                 }
//             });
//             alert('게임을 다시 시작합니다.!');
//             this.setState({
//                 value: '',
//                 answer: getNumbers(),
//                 tries: [],
//             });
//         } else {  // 답이 틀렸다면
//             const answerArray = this.state.value.split('').map((v) => parseInt(v));
//             let strike = 0;
//             let ball = 0;
//             if (this.state.tries.length >= 9) {
//                 this.setState({
//                     result: `10번 넘게틀려서 실패! 답은 ${answer.join(',')}였습니다.`,
//                 });
//                 alert('게임을 다시 시작합니다.!');
//                 this.setState({
//                     value: '',
//                     answer: getNumbers(),
//                     tries: [],
//                 });
//             } else {
//                 for (let i = 0; i < 4; i+= 1) {
//                     if (answerArray[i] === this.state.answer[i]) {
//                         strike += 1;
//                     } else if (this.state.answer.includes(answerArray[i])) {
//                         ball += 1;
//                     }
//                 }
//                 this.setState((prevState) => {
//                     return {
//                         tries: [...prevState.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼 입니다.`}],
//                         value: '',
//                     }
//                 });
//             }
//         }
//     }; 

//     onChangeInput = (e) => {
//         console.log(this.state.answer);
//         this.setState({
//             value: e.target.value,
//         })

//     };

//     render() {
//         const { result, value, tries } = this.state;
//         return (
//             <>
//                 <h1>{this.state.result}</h1>
//                 <form onSubmit={this.onSubmitForm}>
//                     <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
//                 </form>
//                 <div>시도: {this.state.tries.length} </div>
//                 <ul>
//                     {this.state.tries.map((v, i) => {
//                         return (
//                             <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
//                         ); // return 생략가능   
//                     })}
//                 </ul>
//             </>
//         )
//     }
// }

// export default NumberBaseball;  //import Numberbaseball;