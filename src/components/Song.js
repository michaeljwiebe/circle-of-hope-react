import React, { Component } from 'react'
import { connect } from 'react-redux' 

import { addToSetlist } from '../redux/actions'

class Song extends Component {
    render() {
        let { title, artist, lyrics } = this.props.songData
        let { addToSetlist } = this.props
        return (
            <div>
                <div style={songStyles}>
                    <div style={titleStyle}>
                        {title}<br/>{artist}
                        <div style={buttonStyles.container}>
                            <div 
                                style={{...buttonStyles.standard, ...buttonStyles.one}} 
                                onClick={() => {addToSetlist(this.props.songData)}}>
                                    Add To Setlist
                            </div>
                            <div 
                                style={{...buttonStyles.standard, ...buttonStyles.two}} 
                                onClick={() => {}}>
                                    Suggest Edits
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
    addToSetlist
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
        padding: '10px',
        border: '1px solid black',
        margin: '10px'
    },
    one: {
        backgroundColor: 'blue'
    },
    two: {
        backgroundColor: 'green'
    }
}