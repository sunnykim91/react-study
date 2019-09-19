import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ResponseCheck from './ResponseCheck';
// import RemderTest from './RenderTest';

const Hot = hot(ResponseCheck);

ReactDOM.render(<ResponseCheck />, document.querySelector('#root'));