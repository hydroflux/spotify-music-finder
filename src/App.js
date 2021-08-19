import { Component } from 'react';
import './App.css';
import { authorization_request } from './secrets';

class App extends Component {

  componentDidMount(){
    console.log(authorization_request)
    console.log(auth2)
    fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        Authorization: authorization_request,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    })
      .then( response => response.json() )
      .then( result => console.log(result))
  }

  render(){
    return (
      <div className="App">
      </div>
    )
  }
}

export default App;
