import { Component } from 'react'

import SearchBar from 'material-ui-search-bar'
import SearchIcon from '@material-ui/icons/Search'
import { authFetch, parseHTTPResponse } from '../../helpers/utilities'

let searchURL = 'https://api.spotify.com/v1/search'

class SearchContainer extends Component {

    state = {
        searchTerm: ''
    }

    handleChange = searchTerm => this.setState({ searchTerm })

    handleSearch = () => {
        const { searchTerm } = this.state
        const { history } = this.props
        searchURL =  `${searchURL}?q=${searchTerm}&type=artist`
        const headers = {
            Authorization: `Bearer ${localStorage.spotify_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }

        authFetch(searchURL,
            'GET',
            headers)
            .then( parseHTTPResponse )
            .then( ({ artists: {items} }) => {
                history.push(`/search?q=${searchTerm}`, { searchTerm, artist: items[0] })
            })
    }

    render(){
        return (
            <SearchBar 
                className="search-bar"
                name="searchTerm"
                value={ this.state.searchTerm }
                placeholder="Search by artist"
                // cancelOnEscape={ true }
                closeIcon={ <SearchIcon /> }
                onCancelSearch={ this.handleSearch }
                onRequestSearch={ this.handleSearch }
                onChange={this.handleChange}
            />
        )
    }
}

export default SearchContainer