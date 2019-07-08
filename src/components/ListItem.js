import React, { Component } from 'react'
import { connect } from 'react-redux'

import CaptionedButton from './CaptionedButton'

import { 
    selectSong, 
    addToSetlist, 
    removeFromSetlist 
} from '../redux/actions'

class ListItem extends Component {

    render() {
        let { song, isSetlist, selectSong } = this.props
        let { title, artist, id } = song
        let addBtn = <CaptionedButton
            songData={song}
            icon={'fa fa-plus'} 
            action={addToSetlist}
        />
        
        let removeBtn = <CaptionedButton
            songData={song}
            icon={'fa fa-minus-circle'} 
            action={removeFromSetlist}
        />


        let btns = []
        if (!isSetlist) {
            btns = [addBtn, removeBtn]
        } else {
            btns = [removeBtn]
        }
        return (
            <div>
                <div
                    onClick={() => selectSong(id)}
                >
                    { title } - { artist }
                </div>
                {/* { addBtn } */}
                { btns }
            </div>
        )
    }
}

export default connect(null, { selectSong })(ListItem)