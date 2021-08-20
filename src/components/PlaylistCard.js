import React from 'react'

export default function PlaylistCard({ playlist }) {
    
    const { name, description, images } = playlist

    return (
        <div className="playlist-card">
            <h2>{ name }</h2>
            <p>{ description }</p>
            <img
                src={ images[0].url }
                alt={ name }
            />
        </div>
    )
}