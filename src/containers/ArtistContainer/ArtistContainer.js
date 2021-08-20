import { Component } from 'react'
import { authFetch, parseHTTPResponse } from '../../helpers/utilities'
import './ArtistContainer.css'

const artistURL = 'https://api.spotify.com/v1/artists'

class ArtistContainer extends Component{

    state = {
        tracks: []
    }

    componentDidMount(){
        const { artist } = this.props.location.state
        console.log(this.props.location.state)
        const headers = {
            Authorization: `Bearer ${localStorage.spotify_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }

        authFetch(`${artistURL}/${artist.id}/top-tracks?market=US`,
            'GET',
            headers
        )
            .then( parseHTTPResponse )
            .then( ({ tracks }) => this.setState({ tracks }))
        
    }

    render(){
        return (
            <section>
                {}
            </section>
        )
    }
}

export default ArtistContainer