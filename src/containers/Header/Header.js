import { Link } from 'react-router-dom'

import SpotifyLogo from '../../assets/images/spotify-logo.png'

import './Header.css'

import SearchContainer from '../SearchContainer/SearchContainer'

export default function Header({ history }) {
    return (
        <header>
            <Link to="/">
                <img
                    id="logo"
                    src={ SpotifyLogo }
                    alt="logo"
                />
            </Link>
            <SearchContainer history={history}/>
        </header>
    )
}
