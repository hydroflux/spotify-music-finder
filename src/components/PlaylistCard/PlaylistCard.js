import './PlaylistCard.css'

export default function PlaylistCard({ playlist }) {
    
    const { name, description, images } = playlist

    return (
        <div className="playlist-card">
            <div className="playlist-details">
                <h2>{ name }</h2>
                <p dangerouslySetInnerHTML={{ __html: `${description}` }}></p>
            </div>
            <img
                src={ images[0].url }
                alt={ name }
            />
        </div>
    )
}