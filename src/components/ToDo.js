import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked={ this.props.isCompleted }/>
                <li>{ this.props.description }</li>
            </div>
        );
    }
}

export default ToDo;
