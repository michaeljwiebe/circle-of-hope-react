import React, { Component } from 'react'

class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}

export default ListItem