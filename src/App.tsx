import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Artworks from './pages/Artworks';
import Contacts from './pages/Contacts';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import News from './pages/News';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/artworks" element={<Artworks/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
