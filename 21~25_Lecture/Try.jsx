import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li key={this.props.value.fruit}>
                <b>{this.props.value.fruit}</b> - {this.props.index.i}
                <div>컨텐츠</div>
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
                <div>컨텐츠4</div>
            </li>
        )
    }
}

export default Try;