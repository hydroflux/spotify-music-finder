export const parseHTTPResponse = response => response.json()
export const authorization_request = `Basic ${btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)}`

export const featuredPlaylistsURL = 'https://api.spotify.com/v1/browse/featured-playlists'

export const authHeaders = {
    Authorization: `Bearer ${localStorage.spotify_token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

export const authFetch = (url, method, headers, body) => {
    return fetch(url, { method, headers, body })
}