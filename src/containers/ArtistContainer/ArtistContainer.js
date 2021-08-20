import { Component } from 'react'
import { authFetch, parseHTTPResponse } from '../../helpers/utilities'
import TracksContainer from '../TracksContainer/TracksContainer'
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
        const { tracks } = this.state
        const { artist } = this.props.location.state
        
        return (
            <section>
                <div className="artist-section">
                    <div className="artist-details">
                        <h1 className="artist-results">Results for <strong>{ artist.name }</strong></h1>
                        <p className="artist-followers">Followers: { artist.followers.total }</p>
                    </div>
                    <img
                        src={ artist.images[0].url }
                        alt={ artist.name }
                    />
                </div>
                <TracksContainer tracks={ tracks }/>
            </section>
        )
    }
}

export default ArtistContainer