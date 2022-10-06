import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function EditMartialArtist() {
    const [form, setForm] = useState({
        name: '',
        nickname: '',
        weightClass: 0
    })
    const [errorMessage, setErrorMessage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        const getMartialArtist = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/martialartist/${id}`)
                // console.log(response.data)
                setForm(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }                
            }
        }
        getMartialArtist()
    }, [])

    // submit event handler
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // axios.put/.post('url', data for the request body)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/martialartist/${id}`, form)
            // navigate back to the details page for this martial artist
            navigate(`/martialartist/${id}`)
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }            
        }
    }    

    return (
        <div>
            <h1>Edit Martial Artist</h1>

            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text'
                        id='name'
                        value={form.name}
                        placeholder='name...'
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='nickname'>Nickname</label>
                    <input 
                        type='text'
                        id='nickname'
                        value={form.nickname}
                        placeholder='nickname...'
                        onChange={e => setForm({ ...form, nickname: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='weightClass'>Weightclass</label>
                    <input 
                        type='number'
                        id='weightClass'
                        value={form.weightClass}
                        placeholder='weightclass...'
                        onChange={e => setForm({ ...form, weightClass: e.target.value })}
                    />
                </div>

                <button tyoe='submit'>Submit Edit</button>                
            </form>

            <Link to={`/martialartist/${id}`}><button>Go Back</button></Link>
        </div>
    )
}