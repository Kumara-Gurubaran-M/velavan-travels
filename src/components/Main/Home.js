import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Templebg from '../../images/rameswaram-bg.webp';
import LowPrice from '../../images/lowprice.png';
import Staff from '../../images/staff.png';
import Reliable from '../../images/reliable.png';
import Toyota from '../../images/toyota-logos.png';
import Mahindra from '../../images/mahindra_logo.png';
import Swift from '../../images/swift.png';
import TempleTour from '../../images/sri-ranganathasvamy.png';
import Island from '../../images/Adventures.png';
import History from '../../images/expedition.png';
import Beach from '../../images/summer-holidays.png';

const Home = () => {
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



    const whyServiceData = [
        { img: LowPrice, title: 'Low prices', content: 'Sri Velavan Travels offers top-class taxi services in Rameswaram at affordable prices.' },
        { img: Staff, title: 'Experienced staff', content: 'Our team of expert drivers and travel guides ensure a safe and memorable journey in Rameswaram.' },
        { img: Reliable, title: 'Reliable support', content: 'We provide 24/7 reliable customer support to assist you with your travel needs in Rameswaram.' },
    ];

    const brandData = [
        { img: Toyota, alt: 'Toyota' },
        { img: Mahindra, alt: 'Mahindra' },
        { img: Swift, alt: 'Swift' },
    ];

    const serviceData = [
        { img: TempleTour, alt: 'Temple Tours' },
        { img: Beach, alt: 'Beach Retreats' },
        { img: History, alt: 'Historical Expeditions' },
        { img: Island, alt: 'Island Adventures' },
    ];

    return (
        <div className='home'>
            <Helmet>
                <title>Velavan Travels - Best Taxi Services & Tours in Rameswaram</title>
                <meta name='description' content="Explore Rameswaram with Velavan Travels - Offering affordable taxi services, guided temple tours, beach retreats, and more. Book your adventure today!" />
                <link rel='canonical' href='https://www.velavantravels.com/' />
                <meta name='keywords' content='Rameswaram travels, Rameswaram taxi, Velavan Travels, Rameswaram tours, Rameswaram temples, Rameswaram beaches, Rameswaram cultural heritage, affordable taxi services, guided tours' />
                <meta name='author' content='Velavan Travels' />
                <meta property='og:title' content="Velavan Travels - Best Taxi Services & Tours in Rameswaram" />
                <meta property='og:description' content="Discover the beauty of Rameswaram with our affordable taxi services, guided tours, and travel packages. Book your Rameswaram adventure with Sri Velavan Travels today." />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://www.velavantravels.com/' />
                <meta property='og:image' content='https://imgur.com/BAD0dFp' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta property='og:site_name' content='Velavan Travels' />
                <meta property='og:locale' content='en_US' />
            </Helmet>
            <div className='parallax-container'>
                <div className='parallax-content'>
                    <img src={Templebg} alt='Rameswaram Travel Background' className='parallax-bg' style={{ transform: `translateY(${offset * 0.5}px)` }} />
                    <div className='parallax-text' data-aos='zoom-in-up' data-aos-duration='2000'>
                        <h1>Sri Velavan Travels</h1>
                        <p>Leading Travel Agency in Rameswaram - 24/7 Taxi Services & Guided Tours</p>
                        <Link to='/'>
                            <button className='home-button'>CALL: 9940963631 num</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className='ourservice-container'>
                <div className='about-velavan' data-aos='zoom-in' data-aos-duration='3000'>
                    <h3>Welcome to Velavan Travels - Your Gateway to Unforgettable Rameswaram Experiences</h3>
                    <p>At Velavan Travels, we're more than just a travel agency. We're your trusted partners in exploring the mesmerizing beauty of Rameswaram. With a passion for adventure and a commitment to excellence, we craft journeys that redefine travel experiences.</p>
                </div>
                <h2 data-aos='zoom-in' data-aos-duration='2000'>Our Services</h2>
                <div className='ourservice-section'>
                    {serviceData.map((data, index) => (
                        <article key={index} className='ourservice-content' data-aos='fade-up' data-aos-duration='2000'>
                            <img alt={data.alt} src={data.img} />
                            <h3 data-aos='zoom-in-down' data-aos-duration='1800'>{data.alt}</h3>
                        </article>
                    ))}
                </div>
                <p className='home-mission-2' data-aos='zoom-in-up' data-aos-duration='1800'>Discover the enchanting beauty of Rameswaram with Velavan Travels. Our mission is to offer top-notch travel experiences, whether you're on a pilgrimage, exploring historical sites, or enjoying the beach. Book your Rameswaram adventure with us today!</p>
            </section>

            <section className='service-container'>
                <h2 data-aos='zoom-in' data-aos-duration='2000'>Why Choose Our Service</h2>
                <div className='service-section'>
                    {whyServiceData.map((data, index) => (
                        <article key={index} className='service-content' data-aos='fade-up' data-aos-duration='2000'>
                            <img alt={data.title} src={data.img} />
                            <h3 data-aos='zoom-in-down' data-aos-duration='1800'>{data.title}</h3>
                            <p data-aos='zoom-in-down' data-aos-duration='1600'>{data.content}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className='brand-container'>
                <h2 data-aos='zoom-in' data-aos-duration='2000'>Popular Car Brands We Rent</h2>
                <div className='brand-section'>
                    {brandData.map((data, index) => (
                        <article key={index} className='brand-content' data-aos='fade-up' data-aos-anchor-placement='center-center'>
                            <img alt={data.alt} src={data.img} />
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

