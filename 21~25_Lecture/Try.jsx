// import React, { PureComponent, memo, useState } from 'react';

// class Try extends PureComponent {
//     constructor(props) {
//         super(props);
        
//         const filtered = this.props.filter(() => {

//         });

//         this.state = {
//             result: filtered,
//             try: this.props.try,
//         }
//     }
    
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }

import React, { Component } from 'react';



// 함수형
const Try = memo( ({ tryInfo }) => {
    const [result, setResult] = useState(tryInfo.result);
    const onClick = () => {
        setResult('1');
    };

    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick={onClick}>result}</div>
        </li>
    )
});

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