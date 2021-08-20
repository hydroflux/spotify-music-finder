import SpotifyLogo from '../../assets/images/spotify-logo.png'

import './Header.css'

import SearchContainer from '../SearchContainer/SearchContainer'

export default function Header() {
    return (
        <header>
            <img
                id="logo"
                src={ SpotifyLogo }
                alt="logo"
            />
            <SearchContainer />
        </header>
    )
}
