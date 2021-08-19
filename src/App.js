import { Component } from 'react';
import './App.css';
import { authorization_request } from './secrets';

const parseHTTPResponse = response => response.json()

class App extends Component {

  componentDidMount(){
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
      })
  }

  getArtists = () => {
    fetch('https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6', {
      headers: {
        Authorization: `Bearer ${localStorage.spotify_token}`
      }
    })
      .then( parseHTTPResponse )
      .then( console.log )
  }

  getPlaylists = () => {
    fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: `Bearer ${localStorage.spotify_token}`,
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
        <button onClick={this.getArtists}>Get Artists</button>
        <button onClick={this.getPlaylists}>Get Playlists</button>
      </div>
    )
  }
}

export default App;
