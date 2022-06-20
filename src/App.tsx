import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//page and layout imports
import Header from "./components/header/Header";
import ArtworkDetails from "./pages/ArtworkDetails";
import { Artworks } from "./pages/Artworks";
import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Contact from "./pages/Contact";

//apollo client
const client = new ApolloClient({
  uri: "https://lerverket-strapi.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/:slug" element={<Category />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/konst" element={<Artworks />} />
            <Route
              path="/konst/:id"
              element={<ArtworkDetails/>}
            />
          </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
