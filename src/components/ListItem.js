import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../redux/actions'

class ListItem extends Component {

    render() {
        let { song } = this.props
        let { title, artist, id } = song
        return (
            <div 
                onClick={() => this.props.selectSong(id)}>
                {title} - {artist}
            </div>
        )
    }
}

export default connect(null, { selectSong })(ListItem)