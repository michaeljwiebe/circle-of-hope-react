import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'
import { getTrueFilters } from './Filters'

import { updateSearch } from '../redux/actions'

class List extends Component {

    renderList() {
        let { songs, searchText, filters } = this.props
        // let { trueFilters } = this.getFilters()
        let { trueFilters } = getTrueFilters(filters)
        if (searchText || trueFilters.length) {
            songs = this.filterList(trueFilters)
        }
        return songs.map(song => {
            return <ListItem {...song} key={song.id} />
        })
    }

    filterList(trueFilters) {

        // apply filters
        console.log(this.props.songs.length)
        let filteredList = this.props.songs
        console.log(trueFilters)
        if (trueFilters.length) {
            filteredList = filteredList.filter(song => {
                let matches = 0
                for (let i = 0; i < song.characteristics.length; i++) {
                    if (
                        trueFilters.indexOf(song.characteristics[i]) !== -1 ||
                        trueFilters.indexOf(song.languages[i]) !== -1 ||
                        trueFilters.indexOf(song.locations[i]) !== -1
                    ) {
                        matches++
                    }
                }
                if (matches > 0) return true
                else return false
            })
        }

        // apply searchText
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

