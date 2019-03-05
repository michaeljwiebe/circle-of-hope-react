import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'

import { updateSearch } from '../redux/actions'

class List extends Component {

    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         filteredList: []
    //     }
    // }

    renderList() {
        // let songs = this.props.songs
        let { songs, searchText } = this.props
        if (searchText) {
            songs = this.filterList()
        }
        return songs.map(song => {
            return <ListItem {...song} key={song.id} />
        })
    }

    filterList() {
        let filteredList = this.props.songs.filter(song => {
            let { searchText } = this.props
            let { title, artist, lyrics } = song
            searchText = searchText.toLowerCase()
            title = title.toLowerCase()
            artist = artist.toLowerCase()
            lyrics = lyrics.toLowerCase()
            if (
                title.indexOf(searchText) !== -1 ||
                lyrics.indexOf(searchText) !== -1 ||
                artist.indexOf(searchText) !== -1
            ) {
                return true
            } else return false
        })
        return filteredList
    }

    render() {
        let list = this.renderList()
        return (
            <div>{list}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { searchText } = state.updateSearch
    const { selectedSong } = state.selectSong
    return {
        selectedSong,
        searchText
    }
}

const mapDispatchToProps = {
    updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

