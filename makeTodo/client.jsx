const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Todo = require('./todo');

const Hot = hot(Todo);

ReactDom.render(<Hot />, document.querySelector('#root'));