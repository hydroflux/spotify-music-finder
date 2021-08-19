export const parseHTTPResponse = response => response.json()
export const authorization_request = `Basic ${btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)}`

export const authFetch = (url, method, headers, body) => {
    return fetch(url, { method, headers, body })
}