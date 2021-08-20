export default function TrackCard({ name, album }) {
    return (
        <div className="track-card">
            <h2>{ name }</h2>
            <img
                src={ album.images[0].url }
                alt={ name }
            />
        </div>
    )
}
