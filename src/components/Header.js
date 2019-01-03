import React, { Component } from 'react'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: null
        }
    }

    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <ul className="menu">
                    <li>Music</li>
                    <li>Church</li>
                    <li>Feedback</li>
                    <li>About</li>
                </ul>
            </div>
        )
    }

}

export default Header