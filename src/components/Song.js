import React, { Component } from 'react'

class Song extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //     }
    // }
    render() {
        console.log('SONG LOADED')
        let { title, artist, lyrics } = this.props.selectedSong
        return (
                <div>
                    <div>{title} - SONGS{artist}</div>
                    <div>{lyrics}</div>
                </div>
        )
    }
}

export default Song