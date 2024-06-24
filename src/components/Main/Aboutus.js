import React, { useEffect, useState } from 'react';
import About from "../../images/aboutus.jpg";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

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
                <link rel='canonical' href="https://www.velavantravels.com/About-us" />
                {/* Other meta tags */}
            </Helmet>

            <div className="parallax-container">
                <div className="parallax-content">
                    <img
                        src={About}
                        alt="Background"
                        className="parallax-bg"
                        style={{ transform: `translateY(${offset * 0.5}px)` }}
                    />
                    <div className="parallax-text">
                        <h1 data-aos="zoom-in-up" data-aos-duration="2000">About us</h1>
                        <p data-aos="zoom-in-up" data-aos-duration="1800">Welcome to Sri Velavan Travels, where every journey is a story waiting to be told. Established with a passion for travel and a commitment to delivering exceptional experiences, Sri Velavan Travels is your trusted partner in exploring the wonders of Rameshwaram.</p>
                        <p className='about-hide' data-aos="zoom-in-up" data-aos-duration="1600">Discover the enchanting beauty of Rameshwaram with Sri Velavan Travels, where your journey becomes an unforgettable adventure. Our dedicated team is committed to providing you with a seamless and affordable travel experience, ensuring you explore every corner of this mystical island.</p>
                    </div>
                </div>
            </div>

            <div className='aboutus-content'>
                <h1 data-aos="zoom-in" data-aos-duration="2000">Our Mission</h1>
                <p data-aos="zoom-in-down" data-aos-duration="1800">At Sri Velavan Travels, our mission is to connect travelers with the cultural, spiritual, and natural treasures of Rameshwaram. We believe in creating not just trips but transformative experiences that leave an indelible mark on your soul.</p>
                <Link to="/" data-aos="zoom-in" data-aos-duration="1800">
                    <button className='home-button'>Explore More</button>
                </Link>
            </div>
        </div>
    );
}

export default Aboutus;
