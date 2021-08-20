import './TrackCard.css'

export default function TrackCard({ name, album }) {
    return (
        <div className="track-card">
            <h3>{ name }</h3>
            <img
                src={ album.images[0].url }
                alt={ name }
            />
        </div>
    )
}
