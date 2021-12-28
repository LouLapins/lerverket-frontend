import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import ArtworkDetails from './pages/ArtworkDetails';
import Artworks from './pages/Artworks';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import Directions from './pages/Directions';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/directions" element={<Directions/>}/>
          <Route path="/artworks" element={<Artworks/>}/>
          <Route path="/artworks/details/:id" element={<ArtworkDetails/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
