import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFilters } from '../redux/actions'

class Filters extends Component {

    render () {
        let filterKeys = Object.keys(this.props.filters)
        let filters = filterKeys.map(f => {
            return <div key={f}>
                <input 
                    type="checkbox" 
                    value={this.props.filters[f]}
                    onClick={evt => this.props.updateFilters(f)} 
                /> {f}
            </div>
        })

        return (
            <div>
                { filters }
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = {
    updateFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)