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
                            <CaptionedButton action={addToSetlist} songData={songData} caption="Add to Setlist" icon="fas fa-plus" />
                            {/* <div 
                                style={{...buttonStyles.standard, ...buttonStyles.one}} 
                                onClick={() => {addToSetlist(this.props.songData)}}
                            >
                                <i className="fas fa-plus" style={buttonStyles.faIcon}></i>
                                Add to Setlist
                            </div> */}
                            <div 
                                style={{...buttonStyles.standard, ...buttonStyles.two}} 
                                onClick={() => {}}
                            >
                                <i className="far fa-edit" style={buttonStyles.faIcon}></i>
                                Suggest Edits
                            </div>
                            <div 
                                style={{...buttonStyles.standard, ...buttonStyles.two}} 
                                onClick={() => {removeFromSetlist(this.props.songData)}}
                                >
                                <i className="fas fa-minus-circle" style={buttonStyles.faIcon}></i>
                                Remove from Setlist
                            </div>
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