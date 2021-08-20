import './Header.css'
import SpotifyLogo from '../../assets/images/spotify-logo.png'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function Header() {
    return (
        <header>
            <img
                id="logo"
                src={ SpotifyLogo }
                alt="logo"
            />
            <SearchBar /> 
        </header>
    )
}
