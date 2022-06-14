import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { AnimatePresence } from "framer-motion";

//page and layout imports
import Header from "./components/header/Header";
import ArtworkDetails from "./pages/ArtworkDetails";
import { Artworks } from "./pages/Artworks";
import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Contact from "./pages/Contact";

//apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const production = process.env.NODE_ENV === "production";
const currentUrl = production
  ? "https://www.yoursite.com"
  : "http://localhost:1337";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/:slug" element={<Category baseUrl={currentUrl} />} />
            <Route path="/kontakt" element={<Contact baseUrl={currentUrl} />} />
            <Route path="/konst" element={<Artworks baseUrl={currentUrl} />} />
            <Route
              path="/konst/:id"
              element={<ArtworkDetails baseUrl={currentUrl} />}
            />
          </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
