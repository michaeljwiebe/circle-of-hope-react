import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'

import { updateSearch } from '../redux/actions'

class List extends Component {

    renderList() {
        let { setlist } = this.props
        return setlist.map(song => {
            return <ListItem {...song} key={song.id} />
        })
    }

    render() {
        let list = this.renderList()
        return (
            <div>{list}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { setlist } = state
    return {
        setlist
    }
}

const mapDispatchToProps = {
    updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

