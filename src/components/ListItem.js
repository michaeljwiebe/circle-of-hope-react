import React, { Component } from 'react'

class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        let { title, artist, id } = this.props
        return (
            <a href={`/songs/${id}`} onClick={() => this.props.onClick(this.props)}> 
                <div>{title} - LISTITEM {artist}</div>
            </a>
        )
    }
}

export default ListItem