import './TracksContainer.css'

import TrackCard from "../../components/TrackCard/TrackCard"

export default function TracksContainer({ tracks }) {

    const displayTracks = () => {
        return tracks.map( track => {
            return <TrackCard key={track.id} {...track}/>
        })
    }

    return (
        <section>
            { displayTracks() }
        </section>
    )
}