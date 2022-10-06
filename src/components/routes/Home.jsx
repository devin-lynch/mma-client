import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    // martial artists from the backend
    const [martialArtist, setMartialArtist] = useState([])
    // state for messages from the backend
    const [errorMessage, setErrorMessage] = useState('')
    
    const serverUrl = process.env.REACT_APP_SERVER_URL
    console.log('Server Url', serverUrl)
    
    useEffect(() => {
        const getMartialArtists = async () => {
            try {
                const response = await axios.get(`${serverUrl}/martialartist`)
                // console.log(response.data)
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
            <h1>Welcome to the MMA App! 🥋</h1>

            <h2>Recent Martial Artists:</h2>

            {martialArtistLinks}

            <p>{errorMessage}</p>
        </div>
    )
}