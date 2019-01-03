import React, { Component } from 'react'
import ListItem from './ListItem'
import SearchBar from './SearchBar'

class List extends Component {

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
            return song.title.indexOf(this.state.searchText) !== -1
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

export default List