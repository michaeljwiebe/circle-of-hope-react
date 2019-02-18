import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import action creators?
import { selectSong, updateSearch } from './redux/actions'

import Header from './components/Header'
import ListAndSearch from './components/ListAndSearch'
import Song from './components/Song'

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    handleSelectSong = songId => {
        this.props.selectSong(songId) // this is calling the action but it is not entering into the state
    }
    
    handleUpdateSearch = searchText => {
        this.props.updateSearch(searchText)
    }
    
    render () {
        console.log('this.props', this.props)
        let { selectedSongId } = this.props
        let song = songs.find((song) => song.id === selectedSongId)
        let songRender = null
        if (selectedSongId > -1) {
            songRender = <Song songData={song} />
        }
        return (
            <div style={ appContainerStyles }>
                <Header />
                <div style={ flexContainer }> 
                    <div style={ filterContainerStyles }> FILTERS </div>
                    <div style={ bodyContainerStyles }>
                        <ListAndSearch 
                            {...this.props} 
                            songs={songs} 
                            onClick={this.handleSelectSong} 
                            onSearch={this.handleUpdateSearch} 
                            />
                        { songRender }
                    </div>
                </div>
            </div>
        )
    }
}

const appContainerStyles = {
    margin: '0 auto',
    maxWidth: '1200px',
}

const filterContainerStyles = {
    width: '100px'
}

const flexContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '30px'

}

const bodyContainerStyles = {

}

let songs = [{
    title: 'one',
    artist: 'Alex',
    lyrics: 'la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa',
    id: '1'
}, {
    title: 'two',
    artist: 'Ben',
    lyrics: 'Great God, the giver of all good, accept our thanks and bless this food, grace health and strength to us afford, through Jesus Christ our risen lord',
    id: '2'
}, {
    title: 'three',
    artist: 'Psalters',
    lyrics: 'Come now and join the feast, right here in the belly of the beast! Cops and soldiers you can come too, just lay down your guns and come on through, rich people get rid of your stuff and poor people there will be enough',
    id: '33'
}, {
    title: 'four',
    artist: 'Circle - Fishtown',
    lyrics: 'Blow ye the trumpet blow, The gladly solemn sound Let all the nations know, To earth’s remotest bound, Chorus: The year of Jubilee is come; Return, ye ransomed sinners, home. (end chorus) Extol the Lamb of God, The all- atoning Lamb; Redemption through his blood, Throughout the world proclaim. (Chorus) The Gospel trumpet hear, The news of heav’nly grace; And saved from earth appear, Before your Savior’s face.',
    id: '44'
}, {
    title: 'five',
    artist: 'Sarah',
    lyrics: 'My Christian friends, in bonds of love, Whose hearts in sweetest union join, Your friendship’s like a drawing band, Yet we must take the parting hand. Your company’s sweet, your union dear, Your words delightful to my ear; Yet when I see that we must part You draw like cords around my heart.',
    id: '55'
}]


const mapStateToProps = (state, ownProps) => {
    console.log('mapState', state)
    return {
        selectedSongId: state.selectSong.selectedSongId
    }
}

const mapDispatchToProps = {
    selectSong,
    updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

    // render () {
    //     let { selectedSongId } = this.props
    //     console.log('this.props', this.props)

    //     return(
    //         <Router>
    //             <div>
    //                 <Header />
    //                 <Route 
    //                     exact path='/' 
    //                     component={(props) => (
    //                         <ListAndSearch 
    //                             {...props} 
    //                             songs={songs} 
    //                             onClick={this.handleSelectSong} 
    //                             onSearch={this.handleUpdateSearch} />
    //                     )}
    //                 />
    //                 <Route 
    //                     path={`/songs/${selectedSongId}`}
    //                     // path={`/songs/4`}
    //                     component={props => <Song {...props} selectedSongId={selectedSongId} />} 
    //                 />
    //             </div>
    //         </Router>
    //     )
    // }


/*
*   Authentication - db connection?
*   Request login form - profile builder, tell us about yourself?
*   set list component - order, notes
*   song component - lyrics, music, google doc?, picture, youtube iframe?, setlist count
*   song edits - save separate versions
*   song submissions - form, direct to db?
*   profile - songs edited, recordings submitted, new song submitted, sets saved
*/

