import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: null
        }
    }

    render() {
        return (
            <Router>

            <div className="header">
                <a href='/'>
                    <div className="logo"></div>
                </a>
                <ul className="menu">
                    <Link to='/music'>Music</Link>
                    <Link to='/church'>Church</Link>
                    <Link to='/feedback'>Feedback</Link>
                    <Link to='/about'>About</Link>
                </ul>
                {/* <Route path="/about" component={About} /> */}
            </div>
            </Router>
        )
        // <li>Music</li>
        // <li>Church</li>
        // <li>Feedback</li>
        // <li>About</li>
    }

}

export default Header