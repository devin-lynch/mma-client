import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/partials/NavBar'
import Home from './components/routes/Home';
import MartialArtists from './components/routes/MartialArtists';
import MartialArtist from './components/routes/MartialArtist';
import EditMartialArtist from './components/routes/EditMartialArtist';
import NewMartialArtist from './components/routes/NewMartialArtist';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/martialartists'
            element={<MartialArtists />}
          />
          <Route
            path='/martialartists/new'
            element={<NewMartialArtist/>}
          />
          <Route
            path='/martialartists/:id'
            element={<MartialArtist />}
          />
          <Route
            path='/martialartists/:id/edit'
            element={<EditMartialArtist />}
          />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
