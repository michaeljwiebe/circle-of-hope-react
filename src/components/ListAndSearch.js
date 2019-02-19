import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'
// due to list filtering functionality, i think it makes sense to render SearchBar here
import SearchBar from './SearchBar'

import { selectSong, updateSearch } from '../redux/actions'

class ListAndSearch extends Component {

    constructor (props) {
        super(props)
        this.state = {
            filteredList: []
        }
    }

    renderList() {
        let songs = this.props.songs
        if (this.props.searchText) songs = this.state.filteredList
        return songs.map(song => {
            return <ListItem {...song} key={song.id} onClick={this.props.onClick} />
        })
    }

    onSearch(text) {
        // this.setState({searchText: ev.target.value})
        this.props.onSearch(text)
        this.filterList()
    }

    filterList() {
        console.log('this.props', this.props)
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
        this.setState({filteredList})
    }

    render() {
        let list = this.renderList()
        return (
            <div>
                <SearchBar onChange={this.onSearch.bind(this)}/>
                <div>{list}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('list state', state)
    return {
        selectedSong: state.selectedSong
    }
}

const mapDispatchToProps = {
    selectSong,
    updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAndSearch)