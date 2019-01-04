import React, { Component } from 'react'

class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        let { title, artist } = this.props
        return (
            <div>{title} - {artist}</div>
        )
    }
}

export default ListItem