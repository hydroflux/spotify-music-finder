import './TracksContainer.css'

import TrackCard from "../../components/TrackCard/TrackCard"

export default function TracksContainer({ tracks }) {

    const displayTracks = () => {
        return tracks.map( track => {
            return <TrackCard key={track.id} {...track}/>
        })
    }

    return (
        <div>
            <h2 className="tracks-container-title">Tracks</h2>
            <section className="tracks-container">    
                { displayTracks() }
            </section>
        </div>
    )
}