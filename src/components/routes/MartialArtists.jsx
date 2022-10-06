import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function MartialArtists() {
    // martial artists from the backend
    const [martialArtist, setMartialArtist] = useState([])
    // state for messages from the backend
    const [errorMessage, setErrorMessage] = useState('')
    
    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getMartialArtists = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/martialartist`)
                // console.log(response.data)
                // TODO: sort by date and only show the most recent bounties
                setMartialArtist(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getMartialArtists()
    }, [])
    
    const martialArtistLinks = martialArtist.map(artist => {
        return (
            <div key={artist._id}>
                <Link to={`/martialartist/${artist._id}`}>
                    {artist.name}
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>All Martial Artists</h1>

            {martialArtistLinks}
        </div>
    )
}