import React, { Component } from 'react'
import { connect } from 'react-redux' 

import CaptionedButton from './CaptionedButton'

import { 
    addToSetlist,
    removeFromSetlist
} from '../redux/actions'

class Song extends Component {
    render() {
        let { songData } = this.props
        let { title, artist, lyrics } = songData
        let { addToSetlist, removeFromSetlist } = this.props
        return (
            <div>
                <div style={songStyles}>
                    <div style={titleStyle}>
                        {title}<br/>{artist}
                        <div style={buttonStyles.container}>
                            <CaptionedButton 
                                action={addToSetlist} 
                                songData={songData} 
                                caption="Add to Setlist" 
                                icon="fas fa-plus" />
                            <CaptionedButton 
                                action={()=>console.log('NO ACTION ADDED')} 
                                songData={songData} 
                                caption="Suggest Edits" 
                                icon="far fa-edit" />
                            <CaptionedButton 
                                action={removeFromSetlist} 
                                songData={songData} 
                                caption="Remove from Setlist" 
                                icon="fas fa-minus-circle" />
                        </div>
                    </div>
                    <div>{lyrics}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addToSetlist,
    removeFromSetlist
}

export default connect(null, mapDispatchToProps)(Song)



const songStyles = {
    maxWidth: '400px',
    margin: '40px 0'
}

const titleStyle = {
    margin: '0 0 10px',
    display: 'flex',
    justifyContent: 'space-between'
}

const buttonStyles = {
    container: {
        width: '320px',
        display: 'flex',
        justifyContent: 'flex-end'

    },
    standard: {
        padding: '0 10px',
        // border: '1px solid black',
        // margin: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '55px',
        fontSize: '11px',
        textAlign: 'center',
        alignItems: 'center'
    },
    // one: {
    //     backgroundColor: 'green',
    //     color: 'white'
    // },
    // two: {
    //     backgroundColor: 'blue',
    //     color: 'white'
    // },
    faIcon: {
        margin: '0 auto 5px',
        fontSize: '30px'
    }
}