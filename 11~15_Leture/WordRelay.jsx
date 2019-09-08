const React = require('react');  // 쪼갠파일에서 필요한 패키지나 라이브러리 가져오는 부분
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: 'Hello, webpack',
  };

  render() {
    return <div>{this.state.text}</div>
  }
}

module.exports = WordRelay; // 쪼갠 파일을 밖에서도 사용하게 해줌.