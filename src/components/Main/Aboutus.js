import React, { useEffect, useState } from 'react'
import About from "../../images/aboutus.jpg"
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'

function Aboutus() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='about-us'>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Explore Rameshwaram with Sri Velavan Travels! Discover enchanting beauty, cultural & spiritual treasures, creating unforgettable adventures." />
                <link rel='canonical' href="/Aboutus" />
                <meta name="keywords" content="Rameswaram travel,rameswaram travel service, Rameswaram tours, Rameswaram temples, Rameswaram beaches, Rameswaram cultural heritage,Rameswaram Sightseeing
                ,Rameswaram Heritage Tours,Rameswaram Cultural Tours,Rameswaram Adventure Tours,Rameswaram Pilgrimage Trips,Rameswaram Wildlife Exploration,Dhanushkodi Excursions,
                Dhanushkodi Beach Adventures,Dhanushkodi History Tours,Dhanushkodi Sunset Viewing,Dhanushkodi Ruins Exploration,Dhanushkodi Eco Tours,Dhanushkodi Photography Expeditions,
                Mandapam travel agency,Mandapam tourist information,Mandapam sightseeing tours,Mandapam vacation packages,Mandapam travel experiences,Mandapam travel tips,Mandapam tour operators,mandapam" />
                <meta name="author" content="Velavan Travels" />
                <meta property="og:title" content="Rameswaram Travel - Explore the Beauty of Rameswaram" />
                <meta property="og:description" content="Discover the beauty of Rameswaram with our guided tours and travel packages. Explore Rameswaram's temples, beaches, and cultural heritage with expert guides." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.velavantravels.com" />
                <meta property="og:image" content="https://imgur.com/BAD0dFp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Rameswaram Travel" />
                <meta property="og:locale" content="en_US" />
            </Helmet>

            <div className="parallax-container">
                <div className="parallax-content">
                    <img
                        src={About}
                        alt="Background"
                        className="parallax-bg"
                        style={{ transform: `translateY(${offset * 0.5}px)` }}
                    />
                    <div className="parallax-text" >
                        <h1 data-aos="zoom-in-up" data-aos-duration="2000">About us</h1>
                        <p data-aos="zoom-in-up" data-aos-duration="1800">Welcome to Sri Velavan Travels, where every journey is a story waiting to be told. Established with a passion for travel and a commitment to delivering exceptional experiences, Sri Velavan Travels is your trusted partner in exploring the wonders of Rameshwaram.</p>
                        <p className='about-hide' data-aos="zoom-in-up" data-aos-duration="1600">Discover the enchanting beauty of Rameshwaram with Sri Velavan Travels, where your journey becomes an unforgettable adventure. Our dedicated team is committed to providing you with a seamless and affordable travel experience, ensuring you explore every corner of this mystical island.</p>
                    </div>
                </div>
            </div>
            <div className='aboutus-content'>
                <h1 data-aos="zoom-in" data-aos-duration="2000">Our Mission</h1>
                <p data-aos="zoom-in-down" data-aos-duration="1800">At Sri Velavan Travels, our mission is to connect travelers with the cultural, spiritual, and natural treasures of Rameshwaram. We believe in creating not just trips but transformative experiences that leave an indelible mark on your soul.</p>
                <Link to="/" data-aos="zoom-in" data-aos-duration="1800"  > <button className='home-button'>Explore More  </button></Link>
            </div>


        </div>
    )
}

export default Aboutus