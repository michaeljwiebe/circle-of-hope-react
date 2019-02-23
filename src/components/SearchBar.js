import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSearch } from '../redux/actions'

class SearchBar extends Component {

    render() {
        return (
            <div>
                {/* <input type='text' onChange={evt => this.props.onChange(evt.target.value)}></input> */}
                <input type='text' onChange={evt => this.props.updateSearch(evt.target.value)}></input>
            </div>
        )
    }

}

export default connect(null, { updateSearch })(SearchBar)