import React, { Component } from 'react';

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

class RSP extends Component {
    state = {
        result: '',
        imgCoord: '0',
        score: 0,
    };

    interval;

    // 랜더함수가 실행되면 리액트가 jsx를 돔에다가 붙여줌, 붙여주고 난 바로 그순간 그순간에 특정한 동작을 할 수 있게 하는 것
    // 랜더가 처음 실행될때 (성공적으로) 아래 함수가 시행됨 ( = 첫 랜더링 된 후) -> 여기에 미동기 요청을 많이 함.
    componentDidMount() {  
        // const {imgCoord} = this.state;  // -142px 비동기 안에서 바깥에 함수 참고하면 안됨. 클로저 문제
        this.interval = setInterval(() => {
            const {imgCoord} = this.state;
            if(imgCoord === rspCoords.바위) {
                this.setState({
                    imgCoord: rspCoords.가위,
                });
            } else if(imgCoord === rspCoords.가위) {
                this.setState({
                    imgCoord: rspCoords.보,
               });
            } else if (imgCoord === rspCoords.보) {
                this.setState({
                    imgCoord: rspCoords.바위,
                });
            }
        }, 1000);
    };

    // 리렌더링 후
    componentDidUpdate() { 

    };

    // 컴포넌트가 제거되기 직전( 부모가 자식 컴포넌트를 제거했을때 ), 비동기 요청 정리(제거)를 많이 함. (완료되지 않은 비동기 요청정리)
    componentWillUnmount() {
        clearInterval(this.interval);
    };

    onClickBtn = (choice) => {

    };


    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
        
    }
}

export default RSP;