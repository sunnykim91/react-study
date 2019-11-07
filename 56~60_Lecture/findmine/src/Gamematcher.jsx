import React, { component } from 'react';
import { withRouter } from 'react-router-dom';
import NumberBaseball from '../../../21~25_Lecture/NumberBaseball';
import RSP from '../../../36~40_Lecture/RSP';
import Lotto from '../../../41~45_Lecture/lotto/src/lotto';

export default class GameMatcher extends Component {
    render() {
        console.log(this.props.history, this.props.match);
        return (
            <>
                <NumberBaseball />
                <RSP />
                <Lotto />
            </>
        );
    }
}

export default GameMatcher;