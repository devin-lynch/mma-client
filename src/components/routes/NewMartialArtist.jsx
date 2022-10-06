import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewMartialArtist() {
    // state to hold our form
    const [form, setForm] = useState({
        name: '',
        nickname: '',
        weightClass: 0
    })
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    // submit event handler
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/martialartist`, form)
            // navigate back to /martialartists to see the new martial artist
            navigate('/')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }            
        }
    }


    return (
        <div>
            <h1>New Martial Artist</h1>

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

                <button tyoe='submit'>Create</button>
            </form>
        </div>
    )
}