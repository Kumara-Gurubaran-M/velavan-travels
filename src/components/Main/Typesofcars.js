import React from 'react'
import Toyata from "../../images/Toyota.webp"
import Xylo from "../../images/Mahindra-Xylo.webp"
import Innova from "../../images/innova.jpg"
import Mahindra from "../../images/mahindra.webp"
import Swift from "../../images/swif.webp"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Typesofcars() {

    return (
        <div className='car-rental-container'>
            <Helmet>
                <title>Rental Cars</title>
                <meta name="description" content="Discover the beauty of Rameswaram and Mandapam with our guided tours and travel packages. Explore Rameswaram's temples, beaches, and cultural heritage with expert guides." />
                <link rel='canonical' href="/Typesofcars" />
                <meta name="keywords" content="Rameswaram travel,rameswaram travel service, Rameswaram tours, Rameswaram temples, Rameswaram beaches, Rameswaram cultural heritage,Rameswaram Sightseeing
                ,Rameswaram Heritage Tours,Rameswaram Cultural Tours,Rameswaram Adventure Tours,Rameswaram Pilgrimage Trips,Rameswaram Wildlife Exploration,Dhanushkodi Excursions,
                Dhanushkodi Beach Adventures,Dhanushkodi History Tours,Dhanushkodi Sunset Viewing,Dhanushkodi Ruins Exploration,Dhanushkodi Eco Tours,Dhanushkodi Photography Expeditions,
                Mandapam travel agency,Mandapam tourist information,Mandapam sightseeing tours,Mandapam vacation packages,Mandapam travel experiences,Mandapam travel tips,Mandapam tour operators,mandapam" />
                <meta name="author" content="Sri Velavan Travels" />
                <meta property="og:title" content="Rameswaram Travel - Explore the Beauty of Rameswaram" />
                <meta property="og:description" content="Discover the beauty of Rameswaram with our guided tours and travel packages. Explore Rameswaram's temples, beaches, and cultural heritage with expert guides." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.velavantravels.com" />
                <meta property="og:image" content="https://imgur.com/BAD0dFp" />
                <meta property="og:image:width" content="2000" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Rameswaram Travel" />
                <meta property="og:locale" content="en_US" />
            </Helmet>
            <section className='car'>
                <h1 data-aos="zoom-in" data-aos-duration="3000">Available Cars</h1>
                <h3 data-aos="zoom-in" data-aos-duration="2000">The most popular car we rent</h3>
                <Link to="/" className='home-link'><h5 data-aos="zoom-in" data-aos-duration="2000" className='home-h5'>Choose Comfort vehicles and Explore Rameshwaram with Velavan Travels</h5></Link>

                <div className='car-section'>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Innova} alt='innova' />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Innova</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Mahindra} alt='mahendra' />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Mahindra Van</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Swift} alt='swift' />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Swift</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Toyata} alt='toyata' />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Toyoto</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Xylo} alt='xylo' />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Xylo</h5>
                    </section>

                </div>
            </section>
        </div>
    )
}

export default Typesofcars