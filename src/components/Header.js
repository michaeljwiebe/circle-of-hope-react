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

            <div style={ headerStyles }>
                <a href='/'>
                    <div style={circleLogo}></div>
                </a>
                <ul className="menu">
                    <Link style={linkStyles} to='/music'>Music</Link>
                    <Link style={linkStyles} to='/church'>Church</Link>
                    <Link style={linkStyles} to='/feedback'>Feedback</Link>
                    <Link style={linkStyles} to='/about'>About</Link>
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

const linkStyles = {
    padding: '10px 20px',
    margin: '0 40px'
}

const circleLogo = {
    backgroundImage: 'url("https://3nzlhn3szrqv32oofi2rghef-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Logo-CoH-300x215.png")',
    height: '100px',
    width: '140px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}

const headerStyles = {
    width: '100%',
    margin: '20px 50px',
    display: 'flex',
    justifyContent: 'space-around',

}

export default Header