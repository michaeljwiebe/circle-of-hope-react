import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../redux/actions'

class ListItem extends Component {

    render() {
        let { title, artist, id } = this.props
        return (
            <div 
                onClick={() => this.props.selectSong(id)}>
                {title} - {artist}
            </div>
        )
    }
}

export default connect(null, { selectSong })(ListItem)