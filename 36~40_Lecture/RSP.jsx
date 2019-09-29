//Hooks형

import React, {  useState, useRef, useEffect } from 'react';

//                           result, imgCoord, score
// componentDidMount
// componentDidUpdate
// componentwillUnmount 
// 클래스에서는 각 메소드가 3개의 state들을 다 조작 가능하다. 
// 훅스에서는 useEffect 하나가 result, imgCoord, score 중 하나 혹은 2개 혹은 다 조작 가능. 아래와 같은 식으로
// useEffect(() => {
//     setImgCoord();
//     setScore();
// }, [imgCoord, score]);
// useEffect(()=> {
//     setResult();
// }, [result]);


// 실행순서
// 클래스의 경우  -> constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔때) -> shouldComponentUpdate  -> render -> componentDidUpdate
// 부모가 나를 없앴을때 -> componentWillUnmount -> 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

//컴퓨터가 어느손 내고 있는지 판단
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    
    useEffect(() => {    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        interval.current = setInterval(changeHand, 100);
        return () => {   //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    }, [imgCoord]);  // 두번째 인수 배열에 넣은 값들이 바뀔 때 마다 useEffect가 실행된다. setInterval이 시작됬다가 claerInterval됫다가를 반복, 매번 clearInterval을 하기 때문에 그냥 setTimeout하는것과 동일

    const changeHand = () => {
        if(imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if(imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0){
            setResult('비겼습니다');
        } else if([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(()=> {
            interval.current = setInterval(changeHand, 100);
        }, 1000);
    }

    return (
        <>
            <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default RSP;



// class형


// import React, { Component } from 'react';

// // 실행순서
// // 클래스의 경우  -> constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔때) -> shouldComponentUpdate  -> render -> componentDidUpdate
// // 부모가 나를 없앴을때 -> componentWillUnmount -> 소멸

// const rspCoords = {
//     바위: '0',
//     가위: '-142px',
//     보: '-284px',
// };

// const scores = {
//     가위: 1,
//     바위: 0,
//     보: -1,
// };

// //컴퓨터가 어느손 내고 있는지 판단
// const computerChoice = (imgCoord) => {
//     return Object.entries(rspCoords).find(function(v) {
//         return v[1] === imgCoord;
//     })[0];
// };


// class RSP extends Component {
//     state = {
//         result: '',
//         imgCoord: '0',
//         score: 0,
//     };

//     interval;

//     // 랜더함수가 실행되면 리액트가 jsx를 돔에다가 붙여줌, 붙여주고 난 바로 그순간 그순간에 특정한 동작을 할 수 있게 하는 것
//     // 랜더가 처음 실행될때 (성공적으로) 아래 함수가 시행됨 ( = 첫 랜더링 된 후) -> 여기에 미동기 요청을 많이 함.
//     componentDidMount() {  
//         // const {imgCoord} = this.state;  // -142px 비동기 안에서 바깥에 함수 참고하면 안됨. 클로저 문제
//         this.interval = setInterval(this.changeHand, 100);
//     };

//     // 리렌더링 후
//     componentDidUpdate() { 

//     };

//     // 컴포넌트가 제거되기 직전( 부모가 자식 컴포넌트를 제거했을때 ), 비동기 요청 정리(제거)를 많이 함. (완료되지 않은 비동기 요청정리)
//     componentWillUnmount() {
//         clearInterval(this.interval);
//     };

//     changeHand = () => {
//         const {imgCoord} = this.state;
//         if(imgCoord === rspCoords.바위) {
//             this.setState({
//                 imgCoord: rspCoords.가위,
//             });
//         } else if(imgCoord === rspCoords.가위) {
//             this.setState({
//                 imgCoord: rspCoords.보,
//             });
//         } else if (imgCoord === rspCoords.보) {
//             this.setState({
//                 imgCoord: rspCoords.바위,
//             });
//         }
//     }

//     onClickBtn = (choice) => () => {
//         const {imgCoord} = this.state;
//         clearInterval(this.interval);
//         const myScore = scores[choice];
//         const cpuScore = scores[computerChoice(imgCoord)];
//         const diff = myScore - cpuScore;
//         if(diff === 0){
//             this.setState({
//                 result: '비겼습니다!',
//             });
//         } else if([-1, 2].includes(diff)) {
//             this.setState((prevState)=>{
//                 return {
//                     result: '이겼습니다.!',
//                     score: prevState.score + 1,
//                 };
//             });
//         } else {
//             this.setState((prevState) => {
//                 return {
//                     result: '졌습니다!',
//                     score: prevState.score - 1,
//                 };
//             });
//         }
//         setTimeout(()=> {
//             this.interval = setInterval(this.changeHand, 100);
//         }, 1000);
//     };


//     render() {
//         const {result, score, imgCoord} = this.state;
//         return (
//             <>
//                 <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
//                 <div>
//                     <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
//                     <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
//                     <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
//                 </div>
//                 <div>{result}</div>
//                 <div>현재 {score}점</div>
//             </>
//         );
        
//     }
// }

// export default RSP;