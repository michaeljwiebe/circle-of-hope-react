import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import ListAndSearch from './ListAndSearch'
import Songs from './Songs'

export default class App extends Component {
    render () {
        return(
            <Router>
                <div>
                    <Header />
                    <Route exact path='/' component={ListAndSearch} />
                    <Route path='/songs' component={Songs} />
                </div>
            </Router>
        )
    }
}

/*
*   Authentication - db connection?
*   Request login form - profile builder, tell us about yourself?
*   set list component - order, notes
*   song component - lyrics, music, google doc?, picture, youtube iframe?, setlist count
*   song edits - save separate versions
*   song submissions - form, direct to db?
*   profile - songs edited, recordings submitted, new song submitted, sets saved
*/

// export default class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             songs: [{
//                 title: 'one',
//                 artist: 'Alex',
//                 lyrics: 'la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa',
//                 id: '1'
//             }, {
//                 title: 'two',
//                 artist: 'Ben',
//                 lyrics: 'Great God, the giver of all good, accept our thanks and bless this food, grace health and strength to us afford, through Jesus Christ our risen lord',
//                 id: '2'
//             }, {
//                 title: 'three',
//                 artist: 'Psalters',
//                 lyrics: 'Come now and join the feast, right here in the belly of the beast! Cops and soldiers you can come too, just lay down your guns and come on through, rich people get rid of your stuff and poor people there will be enough',
//                 id: '3'
//             }, {
//                 title: 'four',
//                 artist: 'Circle - Fishtown',
//                 lyrics: 'Blow ye the trumpet blow, The gladly solemn sound Let all the nations know, To earth’s remotest bound, Chorus: The year of Jubilee is come; Return, ye ransomed sinners, home. (end chorus) Extol the Lamb of God, The all- atoning Lamb; Redemption through his blood, Throughout the world proclaim. (Chorus) The Gospel trumpet hear, The news of heav’nly grace; And saved from earth appear, Before your Savior’s face.',
//                 id: '4'
//             }, {
//                 title: 'five',
//                 artist: 'Sarah',
//                 lyrics: 'My Christian friends, in bonds of love, Whose hearts in sweetest union join, Your friendship’s like a drawing band, Yet we must take the parting hand. Your company’s sweet, your union dear, Your words delightful to my ear; Yet when I see that we must part You draw like cords around my heart.',
//                 id: '5'
//             }]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <ListAndSearch songs={this.state.songs} />
//             </div>
//         );
//     }
// }

