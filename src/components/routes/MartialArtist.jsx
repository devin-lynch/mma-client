import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MartialArtist() {
    const [bounty, setBounty] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    
    const { id } = useParams()
    const navigate = useNavigate()

    
    return (
        <div>
            Martial Artist
        </div>
    )
}