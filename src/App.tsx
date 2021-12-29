import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//page and layout imports
import Header from './components/Header';
import About from './pages/About';
import ArtworkDetails from './pages/ArtworkDetails';
import Artworks from './pages/Artworks';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import Directions from './pages/Directions';
import Category from './pages/Category';

//apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/directions" element={<Directions/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/artworks" element={<Artworks/>}/>
            <Route path="/artworks/details/:id" element={<ArtworkDetails/>}/>
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
