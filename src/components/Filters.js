import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    updateCharacteristicsFilters,
    updateLocationsFilters,
    updateLanguagesFilters
 } from '../redux/actions'

class Filters extends Component {


    render () {
        let { 
            updateCharacteristicsFilters,
            updateLanguagesFilters,
            updateLocationsFilters,
            filters
        } = this.props
        let filterGroups = Object.keys(filters)
        let filtersHTML = filterGroups.map(group => {
            let action;
            if (group === 'characteristics') action = updateCharacteristicsFilters
            else if (group === 'languages') action = updateLanguagesFilters
            else if (group === 'locations') action = updateLocationsFilters
            let filterGroupHTML = Object.keys(filters[group]).map(key => {
                return (
                    <div key={key}>
                        <input
                            type="checkbox"
                            value={filters[group][key]}
                            onClick={evt => action(key)}
                        /> {key}
                    </div>
                )
            })
            return (
                <div className="filterGroup">
                    <div className="title">{group}</div>
                    <div className="filters">
                        {filterGroupHTML}
                    </div>
                </div>
            )
        })

        return (
            <div>
                { filtersHTML }
            </div>
        )
    }

}

export const getTrueFilters = (filters) => {
    let trueFilters = []
    let filterTypes = Object.keys(filters)
    filterTypes.map(type => {
        Object.keys(filters[type]).map(filter => {
            if (filters[type][filter]) trueFilters.push(filter)
        })
    })
    return { trueFilters }
}

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = {
    updateCharacteristicsFilters,
    updateLocationsFilters,
    updateLanguagesFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)