import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'

import { updateSearch } from '../redux/actions'

class List extends Component {

    renderList() {
        let { setlist } = this.props
        console.log('setlist', setlist)
        if (setlist.length && setlist[0] !== undefined) {
            return setlist.map(song => {
                return <ListItem song={song} isSetlist={true} key={song.id} />
            })

        }
    }

    render() {
        let list = this.renderList()
        return (
            <div style={setlistStyles}>{list}</div>
        )
    }
}

const setlistStyles = {
    width: '180px'
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

