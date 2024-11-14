import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/comp/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Conact from "./pages/contact";
import Offers from "./pages/offers";
import Faq from "./pages/faq";
import Signin from "./pages/signin";
import Register from "./pages/register";
import SearchResults from "./pages/searchResults";
import Product from "./pages/product";
import UserDetails from "./pages/userDetails";
import { auth } from "./firebase-config";
import NotFound from "./pages/notFound";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "./assets/comp/footer";

function App() {
  const [user, setuser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  });

  return (
    <>
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:q" element={<SearchResults />} />
        <Route path="/product/:id" element={<Product user={user} />} />
        {user && <Route path="/user" element={<UserDetails user={user} />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
