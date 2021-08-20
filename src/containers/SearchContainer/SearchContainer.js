import { Component } from 'react'

import SearchBar from 'material-ui-search-bar'
import SearchIcon from '@material-ui/icons/Search'

class SearchContainer extends Component {

    state = {
        searchTerm: ''
    }

    handleChange = searchTerm => this.setState({ searchTerm })

    render(){
        return (
            <SearchBar 
                className="search-bar"
                name="searchTerm"
                value={ this.state.searchTerm }
                placeholder="Search by artist"
                cancelOnEscape={ true }
                closeIcon={ <SearchIcon /> }
                onCancelSearch={ () => console.log("on cancel search")}
                onRequestSearch={ () => console.log("on request search")}
                onChange={this.handleChange}
            />
        )
    }
}

export default SearchContainer