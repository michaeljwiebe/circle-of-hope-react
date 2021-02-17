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
import Setlist from './components/Setlist';
import { songs } from './songs';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }
    
    render () {
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
                        <Setlist />
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
