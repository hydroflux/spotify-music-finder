import { Component } from 'react';
import './App.css';
import { authorization_request } from './secrets';

const parseHTTPResponse = response => response.json()

class App extends Component {

  componentDidMount(){
    this.getSpotifyToken()
  }

  getSpotifyToken = () => {
    fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        Authorization: authorization_request,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    })
      .then( parseHTTPResponse )
      .then( ({ access_token }) => {
        localStorage.setItem('spotify_token', access_token)
        this.getFeaturedPlaylists( access_token )
      })
  }

  getFeaturedPlaylists = spotify_token => {
    fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: `Bearer ${spotify_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then( parseHTTPResponse )
      .then( console.log )
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.getPlaylists}>Get Playlists</button>
      </div>
    )
  }
}

export default App;
