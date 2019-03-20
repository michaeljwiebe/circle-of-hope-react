import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    updateStylesFilters,
    updateLocationsFilters,
    updateLanguagesFilters,
    updateMatchingOption,
    expandFilterGroup
 } from '../redux/actions'

class Filters extends Component {
    render () {
        let { 
            updateStylesFilters,
            updateLanguagesFilters,
            updateLocationsFilters,
            updateMatchingOption,
            expandFilterGroup,
            filters
        } = this.props

        let filterGroups = Object.keys(filters)
        let filtersHTML = filterGroups.map(group => {
            let action;
            if (group === 'styles') action = updateStylesFilters
            else if (group === 'languages') action = updateLanguagesFilters
            else if (group === 'locations') action = updateLocationsFilters
            else if (group === 'options') return false // prevents this from becoming a title
            
            let filterGroupHTML
            let titleArrowActivated
            if (filters.options[group]) {
                titleArrowActivated = filterStyles.titleArrowActivated
                // filterStyles.titleArrow = { 
                //     ...filterStyles.titleArrowActivated,
                //     ...filterStyles.titleArrow
                // }
                filterGroupHTML = Object.keys(filters[group]).map(key => {
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
            }
            let titleFirstLetter = group.slice(0,1).toUpperCase()
            let groupTitle = group.split('')
            groupTitle.splice(0,1, titleFirstLetter)
            groupTitle = groupTitle.join('')
            return (
                <div className="filterGroup" key={group}>
                    <div 
                        className="filterTitle"
                        style={ filterStyles.titleContainer }
                        onClick={evt => expandFilterGroup(group)}
                    >
                        <div 
                            style={ filterStyles.titleText }
                            className="title-text"
                        >
                            {groupTitle}
                        </div>
                        <div style={{ ...filterStyles.titleArrow, ...titleArrowActivated }}>
                            <i className="fas fa-arrow-circle-right"></i>
                        </div>
                    </div>
                    <div className="filters">
                        {filterGroupHTML}
                    </div>
                </div>
            )
        })

        return (
            <div style={filterStyles.container}>
                { filtersHTML }
                <div className="matchAllBox" style={filterStyles.matchAll}>
                    <div className="title"></div>
                    <div className="filters">
                        <div key="matchAll">
                            <input
                                type="checkbox"
                                value={filters.matchAll}
                                onClick={evt => updateMatchingOption()}
                            /> Match All Filters
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export const getTrueFilters = (filters) => {
    let trueFilters = []
    let filterTypes = Object.keys(filters)
    filterTypes.map(type => {
        if (type !== 'options') {
            Object.keys(filters[type]).map(filter => {
                if (filters[type][filter]) trueFilters.push(filter)
            })
        }
    })
    return { trueFilters }
}


const filterStyles = {
    container: { width: '200px' },
    matchAll: { marginTop: '30px' },
    titleContainer: { 
        display: 'flex', 
        fontSize: '20px'
    },
    titleText: { 
        minWidth: '95px'
    },
    titleArrow: { transition: '200ms' },
    titleArrowActivated: { rotate: '90deg' }
}


const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = {
    updateStylesFilters,
    updateLocationsFilters,
    updateLanguagesFilters,
    updateMatchingOption,
    expandFilterGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)