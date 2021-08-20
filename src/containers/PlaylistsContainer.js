import React from 'react'
import PlaylistCard from '../components/PlaylistCard'

export default function PlaylistsContainer({ playlists }) {

    const displayPlaylists = () => {
        return playlists.map( playlist => {
            return (
                <PlaylistCard
                    key={playlist.id}
                    playlist={playlist}
                />
            )
        })   
    }

    return (
        <section className="playlists-container" >
            {displayPlaylists()}
        </section>
    )
}
