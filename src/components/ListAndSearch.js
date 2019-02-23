import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from './ListItem'
// due to list filtering functionality, i think it makes sense to render SearchBar here
import SearchBar from './SearchBar'

import { updateSearch } from '../redux/actions'

class ListAndSearch extends Component {

    constructor (props) {
        super(props)
        this.state = {
            filteredList: []
        }
    }

    renderList() {
        let songs = this.props.songs
        if (this.state.searchText) songs = this.state.filteredList
        return songs.map(song => {
            return <ListItem {...song} key={song.id} />
        })
    }

    // onSearch(text) {
    //     // this.setState({searchText: ev.target.value})
    //     this.props.onSearch(text)
    //     this.filterList()
    // }

    filterList() {
        console.log('this.props', this.props)
        let filteredList = this.props.songs.filter(song => {
            let { searchText } = this.props
            let { title, artist } = song
            searchText = searchText.toLowerCase()
            title = title.toLowerCase()
            artist = artist.toLowerCase()
            if (
                title.indexOf(searchText) !== -1 ||
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
                <SearchBar />
                {/* <SearchBar onChange={this.onSearch.bind(this)}/> */}
                <div>{list}</div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListAndSearch)