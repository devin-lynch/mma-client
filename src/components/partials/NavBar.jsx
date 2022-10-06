import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/martialartists'>All Martial Artists</Link>    
                </li>
                <li>
                    <Link to='/martialartists/new'>Create Martial Artist</Link>    
                </li>
            </ul>
        </nav>
    )
}