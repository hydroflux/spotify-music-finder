export default function TracksContainer({ tracks }) {

    const displayTracks = () => {
        console.log('displaying tracks', tracks)
    }

    return (
        <section>
            { displayTracks() }
        </section>
    )
}
