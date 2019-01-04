import React, { Component } from 'react'
import ListItem from './ListItem'
// due to list filtering functionality, i think it makes sense to render SearchBar here
import SearchBar from './SearchBar' 

class ListAndSearch extends Component {

    constructor (props) {
        super(props)
        this.state = {
            searchText: '',
            filteredList: []
        }
    }

    renderList() {
        let songs = this.props.songs
        if (this.state.searchText) songs = this.state.filteredList
        return songs.map(song => {
            return <ListItem {...song} />
        })
    }

    onSearch(ev) {
        this.setState({searchText: ev.target.value})
        this.filterList()
    }

    filterList() {
        // let searchVal = new RegExp(this.state.searchText)
        let filteredList = this.props.songs.filter(song => {
            let { searchText } = this.state
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
                <SearchBar onChange={this.onSearch.bind(this)}/>
                <div>{list}</div>
            </div>
        )
    }
}

export default ListAndSearch