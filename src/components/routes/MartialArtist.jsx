import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MartialArtist() {
    const [martialArtist, setMartialArtist] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getMartialArtist = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/martialartist/${id}`)
                // console.log(response.data)
                setMartialArtist(response.data)
            } catch(err) {
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }                
            }
        }
        getMartialArtist()
    }, [])

    const handleDelete = async () => {
        try {
            // axios to the backend to delete this martial artists
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/martialartist/${id}`)
            // after deletion, navigate back to /martialartists
            navigate('/martialartists')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)            
            }            
        }
    }

    return (
        <div>
            <h1>Martial Artist Details</h1>

            <p>{errorMessage}</p>

            <div>
                <Link to={`/martialartist/${id}/edit`}><button>Edit</button></Link>

                <button onClick={handleDelete}>Delete</button>
            </div>

            <div>
                <h2>{martialArtist.name}</h2>

                <p>{martialArtist.nickname}</p>

                <p>Weightclass: {martialArtist.weightClass}</p>
            </div>
        </div>
    )
}