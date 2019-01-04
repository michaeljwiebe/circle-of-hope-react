import React, { Component } from 'react'

import Header from './Header'
import ListAndSearch from './ListAndSearch'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            songs: [{
                title: 'one',
                artist: 'Alex'
            }, {
                title: 'two',
                artist: 'Ben'
            }, {
                title: 'three',
                artist: 'Psalters'
            }, {
                title: 'four',
                artist: 'Circle - Fishtown'
            }, {
                title: 'five',
                artist: 'Sarah'
            }]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <ListAndSearch songs={this.state.songs} />
            </div>
        );
    }
}
