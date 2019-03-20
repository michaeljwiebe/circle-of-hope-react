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
        styles: ['Slow', 'Shape Notes'],
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
    title: 'Dieu tout puissant',
    artist: 'Rob',
    lyrics: "Dieu tout puissant Quand mon coeur considère Tout l'univers, créer par ton pouvoir Le ciel d'azur, les éclairs, le tonnerre Le clair matin ou les ombres du soir De tout mon être alors s'èléve un chant Dieu tout puissant, que tu es grand De tout mon être alors s'élève un chant Dieu tout puissant que tu es grand Mais quand je songe, au sublime mystère Qu'un Dieu si grand, a pu penser a moi Que son cher fils, et devenu mon frère Et que je suis l'héritier du grand roi Alors mon coeur veut dire à lui le jour Que tu es grand, Oh! Dieu d'amour Alors mon coeur redit la nuit le jour Que tu es grand, Oh! Dieu d'amour Quand mon sauveur éclatant de lumière Se lèvera, de son trône éternel Et que laissant les douleurs de la terre Je pourrai voir les splendeurs de son ciel Je redirai à son divin séjour Rien n'est plus grand, que ton Amour Je redirai dans son divin séjour Rien n'est plus grand que ton Amour Rien n'est plus que ton Amour",
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
    title: 'Galilée',
    artist: 'Michael',
    lyrics: "Victoire, alléluia ! Chantons, crions de joie! Jésus Christ est sorti du tombeau. (bis) Galilée, Galilée, Galilée, je viens de la Galilée, Jésus m'a chargé d'annoncer à tous mes frères qu'il est ressuscité.",
    id: '3',
    tags: {
        styles: [
            'International'
        ],
        locations: [
            'South Broad'
        ],
        languages: ['French'],
        country: ['Benin'],
        seasons: []
    }
}, {
    title: 'three',
    artist: 'Psalters',
    lyrics: 'Come now and join the feast, right here in the belly of the beast! Cops and soldiers you can come too, just lay down your guns and come on through, rich people get rid of your stuff and poor people there will be enough',
    id: '4',
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
    title: 'Od Yavo (Salaam)',
    artist: 'Ben',
    lyrics: "Od yavo’ shalom aleinu (3x) (Peace will come upon us.) Ve al kulam(2x) (And on everyone) Salaam! Aleinu va al kol ha olam.Salaam! Salaam! (On us and on everyone.Peace! Peace!)",
    id: '5',
    tags: {
        styles: ['Fast'],
        locations: [
            'South Broad',
            'Ridge Ave',
            'Marlton',
            'Fishtown/Kensington'
        ],
        languages: ['Hebrew', 'Arabic'],
        country: [],
        seasons: []
    }
}, {
    title: 'four',
    artist: 'Circle - Fishtown',
    lyrics: 'Blow ye the trumpet blow, The gladly solemn sound Let all the nations know, To earth’s remotest bound, Chorus: The year of Jubilee is come; Return, ye ransomed sinners, home. (end chorus) Extol the Lamb of God, The all- atoning Lamb; Redemption through his blood, Throughout the world proclaim. (Chorus) The Gospel trumpet hear, The news of heav’nly grace; And saved from earth appear, Before your Savior’s face.',
    id: '6',
    tags: {
        styles: ['Traditional', 'Shape Note'],
        locations: [
            'South Broad',
        ],
        languages: ['English'],
        country: [],
        seasons: []
    }
}, {
    title: 'five',
    artist: 'Sarah',
    lyrics: 'My Christian friends, in bonds of love, Whose hearts in sweetest union join, Your friendship’s like a drawing band, Yet we must take the parting hand. Your company’s sweet, your union dear, Your words delightful to my ear; Yet when I see that we must part You draw like cords around my heart.',
    id: '7',
    tags: {
        styles: ['Meditative', 'Contemporary'],
        locations: [
            'Ridge Ave',
            'Marlton',
            'Fishtown/Kensington'
        ],
        languages: ['English'],
        country: [],
        seasons: []
    }
}]


