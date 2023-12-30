import "./App.css";

import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Street from "./pages/Street";
import Home from "./pages/Home";
import Catwalk from "./pages/Catwalk";
import Ad from "./pages/Ad";
import About from "./pages/About";

function App(props) {
  return (
    <div className="app">
      <Header />
      <Nav />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Women`s" element={<Women />} />
        <Route path="/Men`s" element={<Men />} />
        <Route path="/On The Street" element={<Street />} />
        <Route path="/The Catwalk" element={<Catwalk />} />
        <Route path="/AdWatch" element={<Ad />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
