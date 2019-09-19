import React, { Component } from 'react';

// 함수형
const Try = ({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

// 클래스형
// class Try extends Component {
//     render() {
//         return (
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
//         )
//     }
// }

export default Try;