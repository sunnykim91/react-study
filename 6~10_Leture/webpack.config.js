const path = require('path'); // node에서 경로 쉽게 조작하기 위함임 , 그냥 외우자!
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 실서비스에서는 production 으로 바꾼다.
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'], // webpack이 알아서 확장자를 찾는다
  },  
  // 제일 중요한 부분
  // 입력
  entry: {
    app: ['./client'],  // client.jsx가 wordRelay를 불러오기때문에 써줄 필요가 없다. 확장자도 생략가능! 대신 resolve써줘야함 위처럼
  },

  module: {
    rules: [{
      test: /\.jsx?/, // 정규표현식 js파일과 jsx파일을 룰을 적용하겠다.
      loader: 'babel-loader',
      options: {
        presets: [
            ['@babel/preset-env', {
                targets: {
                    browsers: ['> 1% in KR'],
                },
                debug: true,
            }],
            '@babel/preset-react'
        ],
        plugins: [],
      }
    }],
  },
  
  // 추가적으로 하고 싶은 것.
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}),
  ],

  // 출력
  output: {
    path: path.join(__dirname, 'dist'),  // 현재폴더에 안에 들어있는 dist라는 폴더가 된다. 
                                        // c:desktop/개발자....어디어디 이런거 안치게 해줌
    filename: 'app.js'
  },
}