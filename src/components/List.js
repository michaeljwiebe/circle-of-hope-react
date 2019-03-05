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
        let { songs, searchText, filters } = this.props
        let trueFilters = Object.keys(filters).filter(f => filters[f])
        console.log('trueFilters', trueFilters)
        if (searchText || trueFilters.length) {
            songs = this.filterList()
        }
        return songs.map(song => {
            return <ListItem {...song} key={song.id} />
        })
    }

    filterList() {
        let filtersSet = []
        Object.keys(this.props.filters).map(f => {
            if (this.props.filters[f]) filtersSet.push(f)
        })
        // apply filters
        let filteredList = this.props.songs
        if (filtersSet.length) {
            filteredList = filteredList.filter(song => {
                for (let i = 0; i < song.tags.length; i++) {
                    if (filtersSet.indexOf(song.tags[i]) !== -1) return true
                }
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

