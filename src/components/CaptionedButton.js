import React, { Component } from 'react'
import { connect } from 'react-redux'

class CaptionedButton extends Component {
    render() {
        let { songData, styles, caption, action, icon } = this.props
        return (
            <div
                style={{ ...buttonStyles.standard, ...styles }}
                onClick={() => { action(songData) }}
            >
                <i className={icon} style={buttonStyles.faIcon}></i>
                { caption }
            </div>
        )
    }
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

export default CaptionedButton