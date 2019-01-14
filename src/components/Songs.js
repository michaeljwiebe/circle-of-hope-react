import React, { Component } from 'react'

class Songs extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        let { title, artist, id } = this.props
        return (
            <a href='/songs/{id}'>
                <div>{title} - SONGS{artist}</div>
            </a>
        )
    }
}

export default Songs