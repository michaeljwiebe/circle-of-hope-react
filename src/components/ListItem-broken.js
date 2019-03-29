import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    selectSong,
    addToSetlist,
    removeFromSetlist
} from '../redux/actions'

class ListItem extends Component {

    render() {
        let {
            song,
            isSetlist,
            addToSetlist,
            removeFromSetlist,
            selectSong
        } = this.props
        let { title, artist, id } = song
        let addBtn, removeBtn

        if (!isSetlist) addBtn = <i onClick={() => addToSetlist(song)} className="fas fa-plus" style={{ ...icons.main, ...icons.add }}></i>
        if (isSetlist) removeBtn = <i onClick={() => removeFromSetlist(song)} className="fas fa-minus-circle" style={{ ...icons.main, ...icons.remove }}></i>
        {/* { addBtn } */ }
        {/* { removeBtn } */ }
        console.log(id)
        return (
            <div
                onClick={evt => selectSong(id)}
                style={titleStyles.text}
            >
                {title} - {artist}
            </div>
        )
    }
}

const icons = {
    main: {
        fontSize: '15px',
    },
    add: { paddingRight: '10px' },
    remove: { paddingLeft: '10px' },

}
const titleStyles = {
    flex: { display: 'flex' },
    text: { minWidth: '100px' }
}

const mapDispatchToProps = () => {
    return {
        selectSong,
        addToSetlist,
        removeFromSetlist
    }
}

const mapStateToProps = (state, ownState) => {
    return {
        setlist: state.setlist
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
export default connect(null, mapDispatchToProps)(ListItem)