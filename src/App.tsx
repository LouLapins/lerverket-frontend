import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//page and layout imports
import Header from './components/header/Header';
import ArtworkDetails from './pages/ArtworkDetails';
import { Artworks } from './pages/Artworks';
import Landing from './pages/Landing';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Instagram from './pages/Instagram';
import Facebook from './pages/Facebook';

//apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const production = process.env.NODE_ENV === "production";
const currentUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/:slug" element={<Category baseUrl={currentUrl}/>}/>
            <Route path="/kontakt" element={<Contact baseUrl={currentUrl}/>}/>
            <Route path="/konst" element={<Artworks baseUrl={currentUrl}/>}/>
            <Route path="/konst/:id" element={<ArtworkDetails baseUrl={currentUrl}/>}/>
            <Route path="/instagram" element={<Instagram/>}/>
            <Route path="/facebook" element={<Facebook/>}/>
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
