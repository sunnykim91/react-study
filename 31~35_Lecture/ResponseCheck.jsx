
//Hooks로 전환
import React, { useState } from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message ,setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.')
            timeout.current = setTimeout( () => {
                setState('now');
                setMessage('지금 클릭')
                startTime.current = new Date();  // 랜더링이 일어나지 않게 해야함!
            }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요!');
        } else if (state === 'now' ) {  // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0
        ? null
        : <>
          <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
          <button onClick={onReset}>리셋</button>
          </>
    };

    return (
        <>
            <div id="screen"
            className={state}
            onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
        </>
    );
};


export default ResponseCheck;



// // class형
// import React, { Component } from 'react';

// class ResponseCheck extends Component {
//     state = {
//         state: 'waiting',
//         message: '클릭해서 시작하세요.',
//         result: [],
//     };

//     timeout;
//     startTime;
//     endTime;

//     onClickScreen = () => {
//         const { state, message, result } = this.state;
//         if (state === 'waiting') {
//             this.setState({
//                 state: 'ready',
//                 message: '초록색이 되면 클릭하세요.',
//             });
//             this.timeout = setTimeout( () => {
//                 this.setState({
//                     state: 'now',
//                     message: '지금 클릭',
//                 });
//                 this.startTime = new Date();  // 랜더링이 일어나지 않게 해야함!
//             }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
//         } else if (state === 'ready') { // 성급하게 클릭
//             clearTimeout(this.timeout);
//             this.setState({
//                 state: 'waiting',
//                 message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요!'
//             })
//         } else if (state === 'now' ) {  // 반응속도 체크
//             this.endTime = new Date();
//             this.setState((prevState) => {
//                 return {
//                     state: 'waiting',
//                     message: '클릭해서 시작하세요!',
//                     result: [...prevState.result, this.endTime - this.startTime],
//                 };
//             });
//         }
//     };

//     onReset = () => {
//         this.setState({
//             result: [],
//         });
//     };

//     renderAverage = () => {
//         const {result} = this.state;
//         return result.length === 0
//             ? null
//             : <>
//               <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
//               <button onClick={this.onReset}>리셋</button>
//               </>

//     };

//     render() {
//         const { state, message } = this.state;
//         return (
//             <>
//                 <div id="screen"
//                 className={state}
//                 onClick={this.onClickScreen}
//                 >
//                     {message}
//                 </div>
//                 {this.renderAverage()}
//             </>
//         )
//     }
// }

// export default ResponseCheck;