import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Main/Home'
import About from './Main/Aboutus'
import TouristPlace from './Main/TouristPlace'
import Typesofcars from './Main/Typesofcars'
import Contact from "./Main/Contact"


export default function Routing() {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Aboutus" element={<About />} />
                <Route path="/TouristPlace" element={<TouristPlace />} />
                <Route path="/Typesofcars" element={<Typesofcars />} />
                <Route path='/Contact' element={<Contact />} />

            </Routes>
        </div>
    )
}

