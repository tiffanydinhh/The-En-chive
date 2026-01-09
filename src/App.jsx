import { Route, Routes } from "react-router-dom"

import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import BorderDayOne from "./pages/bd1Page"
import GivenTaken from "./pages/Title-Tracks/Given-Taken"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bd1" element={<BorderDayOne />} />
          <Route path="/giventaken" element={<GivenTaken />} />
        </Routes>
    </>
  )
}

export default App
