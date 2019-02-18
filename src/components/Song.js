import React, { Component } from 'react'

class Song extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //     }
    // }
    render() {
        let { title, artist, lyrics } = this.props.songData
        return (
                <div >
                    <div>{title} - {artist}</div>
                    <div>{lyrics}</div>
                </div>
        )
    }
}

export default Song