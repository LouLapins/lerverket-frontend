import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//page and layout imports
import Header from './components/Header';
import ArtworkDetails from './pages/ArtworkDetails';
import Artworks from './pages/Artworks';
import Landing from './pages/Landing';
import Category from './pages/Category';
import Contact from './pages/Contact';

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
            <Route path="/categories/:slug" element={<Category baseUrl={currentUrl}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/artworks" element={<Artworks baseUrl={currentUrl}/>}/>
            <Route path="/artworks/details/:id" element={<ArtworkDetails baseUrl={currentUrl}/>}/>
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
