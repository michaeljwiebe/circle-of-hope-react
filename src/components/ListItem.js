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
            <div onClick={() => this.props.onClick(id)}>{title} - LISTITEM {artist}</div>
        )
    }
}

export default ListItem