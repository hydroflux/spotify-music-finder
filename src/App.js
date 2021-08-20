import { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import PlaylistsContainer from './containers/PlaylistsContainer/PlaylistsContainer';
import { authFetch, authorization_request, parseHTTPResponse } from './helpers/utilities';

class App extends Component {

  state = {
    playlists: []
  }

  componentDidMount(){ this.getSpotifyToken() }

  getSpotifyToken = () => {
    const headers = {
      Authorization: authorization_request,
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    authFetch(`https://accounts.spotify.com/api/token`,
      'POST',
      headers,
      'grant_type=client_credentials')
      .then( parseHTTPResponse )
      .then( this.handleAccessToken )
  }

  handleAccessToken = ({ access_token }) => {
    localStorage.setItem('spotify_token', access_token)
    this.getFeaturedPlaylists( access_token )
  }

  getFeaturedPlaylists = spotify_token => {
    const headers = {
      Authorization: `Bearer ${spotify_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    authFetch('https://api.spotify.com/v1/browse/featured-playlists',
      'GET',
      headers)
      .then( parseHTTPResponse )
      .then( ({ playlists: { items } }) => {
        this.setState({playlists: items})
      })
  }

  render(){
    const { playlists } = this.state

    return (
      <div className="App">
        <Header />
        <PlaylistsContainer playlists={playlists}/>
      </div>
    )
  }
}

export default App;
