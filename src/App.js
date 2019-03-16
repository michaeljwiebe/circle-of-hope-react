import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import action creators?
import { selectSong, updateSearch } from './redux/actions'

import Header from './components/Header'
import List from './components/List'
import Song from './components/Song'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }
    
    render () {
        // console.log('this.props', this.props)
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
                    <div>
                        <Filters />
                    </div>
                    <div style={ listAndSongContainer }>
                        <SearchBar />
                        <List 
                            {...this.props} 
                            songs={songs} 
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

const flexContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '30px'
}

const listAndSongContainer = {
    width: '90%',
    minWidth: '300px'
}


const mapStateToProps = (state, ownProps) => {
    return {
        selectedSongId: state.selectSong.selectedSongId,
        searchText: state.updateSearch.searchText
    }
}

const mapDispatchToProps = {
    selectSong,
    updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

let songs = [{
    title: 'one',
    artist: 'Alex',
    lyrics: 'la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa la fa mi la so fa so la fa fa fa',
    id: '1',
    tags: {
        styles: ['Slow'],
        locations: [
            'Ridge Ave',
            'Marlton',
            'Fishtown/Kensington'
        ],
        languages: ['English'],
        country: [],
        seasons: []
    }
}, {
    title: 'two',
    artist: 'Ben',
    lyrics: 'Great God, the giver of all good, accept our thanks and bless this food, grace health and strength to us afford, through Jesus Christ our risen lord',
    id: '2',
    tags: {
        styles: [
            'Traditional'
        ],
        locations: [
            'Marlton'
        ],
        languages: ['French'],
        country: [],
        seasons: []
    }
}, {
    title: 'three',
    artist: 'Psalters',
    lyrics: 'Come now and join the feast, right here in the belly of the beast! Cops and soldiers you can come too, just lay down your guns and come on through, rich people get rid of your stuff and poor people there will be enough',
    id: '33',
    tags: {
        styles: ['Fast'],
        locations: [
            'South Broad',
            'Ridge Ave',
            'Marlton',
            'Fishtown/Kensington'
        ],
        languages: ['English'],
        country: [],
        seasons: []
    }
}, {
    title: 'four',
    artist: 'Circle - Fishtown',
    lyrics: 'Blow ye the trumpet blow, The gladly solemn sound Let all the nations know, To earth’s remotest bound, Chorus: The year of Jubilee is come; Return, ye ransomed sinners, home. (end chorus) Extol the Lamb of God, The all- atoning Lamb; Redemption through his blood, Throughout the world proclaim. (Chorus) The Gospel trumpet hear, The news of heav’nly grace; And saved from earth appear, Before your Savior’s face.',
    id: '44',
    tags: {
        styles: ['Poetic'],
        locations: [
            'South Broad',
        ],
        languages: ['Hebrew', 'Arabic'],
        country: [],
        seasons: []
    }
}, {
    title: 'five',
    artist: 'Sarah',
    lyrics: 'My Christian friends, in bonds of love, Whose hearts in sweetest union join, Your friendship’s like a drawing band, Yet we must take the parting hand. Your company’s sweet, your union dear, Your words delightful to my ear; Yet when I see that we must part You draw like cords around my heart.',
    id: '55',
    tags: {
        styles: ['Meditative', 'Contemporary'],
        locations: [
            'Ridge Ave',
            'Marlton',
            'Fishtown/Kensington'
        ],
        languages: ['Spanish'],
        country: [],
        seasons: []
    }
}]


