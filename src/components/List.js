import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'
import { getTrueFilters } from './Filters'

import { updateSearch } from '../redux/actions'

class List extends Component {

    renderList() {
        let { songs, searchText, filters } = this.props
        let { trueFilters } = getTrueFilters(filters)
        if (searchText || trueFilters.length) {
            songs = this.filterList(trueFilters)
        }
        console.log('songs.length', songs.length)
        return songs.map(song => {
            return <ListItem {...song} key={song.id} />
        })
    }
    
    filterList(trueFilters) {
        // apply checked filters
        const { matchAll } = this.props.filters
        let filteredList = this.props.songs
        if (trueFilters.length) {
            filteredList = filteredList.filter(song => {
                let matches = 0
                let songTags = Object.keys(song.tags) // get tag categories
                songTags.forEach(tag => {
                    song.tags[tag].forEach(key => { // get tag category keys
                        trueFilters.forEach(filter => { // cycle through true filters and find matches to key
                            if (filter === key) matches++
                        })
                    })
                })
                if (matchAll) {
                    if (matches === trueFilters.length) return true // return songs that match all filters
                } else if (matches > 0) return true // return songs that match any filters
                else return false
            })
        }

        // apply searchText filter
        filteredList = filteredList.filter(song => {
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
            }
        })
        console.log(filteredList)
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
    const { filters } = state
    return {
        selectedSong,
        searchText,
        filters
    }
}

const mapDispatchToProps = {
    updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

