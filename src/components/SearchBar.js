import React, { Component } from 'react';

export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <input type='text' onChange={evt => this.props.onChange(evt.target.value)}></input>
            </div>
        )
    }

}

