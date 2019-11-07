import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import GameMatcher from './Gamematcher';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball"> 숫자야구 </Link>
                <Link to="/game/rock-scissors-paper"> 가위바위보 </Link>
                <Link to="/game/lotto-generator">로또</Link>
                <Link to="/game/index">게임 매쳐</Link>
            </div>
            <div>
                <Route path="/number-baseball" component={NumberBaseball} />
                <Route path="/rock-scissors-paper" component={RSP} />
                <Route path="/lotto-generator" component={Lotto} />
                <Route path="/game/:name" component={GameMatcher} />
            </div>
        </BrowserRouter>
    );
};

export default Games;

