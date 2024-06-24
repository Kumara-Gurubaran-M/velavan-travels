import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
                <title>Velavan Travels - Rameswaram Travels & Taxi Services</title>
                <meta name='description' content="Discover the best travel experiences in Rameswaram with Sri Velavan Travels. We offer affordable taxi services, guided temple tours, beach retreats, and more." />
                <link rel='canonical' href='https://www.velavantravels.com/' />
                <meta name='keywords' content='Rameswaram travels, Rameswaram taxi, Mandapam travels, Mandapam taxi,Velavan Travels, Rameswaram tours, Rameswaram temples, Rameswaram beaches, Rameswaram cultural heritage' />
                <meta name='author' content='Velavan Travels' />
                <meta property='og:title' content="Velavan Travels - Rameswaram Travels & Taxi Services" />
                <meta property='og:description' content="Explore the beauty of Rameswaram with our affordable taxi services, guided tours, and travel packages. Book your Rameswaram adventure with Sri Velavan Travels today." />
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
                    <div data-aos='zoom-in-up' data-aos-duration='2000' className='parallax-text'>
                        <h1>Sri Velavan Travels</h1>
                        <p>Leading Travel Agency in Rameswaram - 24/7 Taxi Services & Guided Tours</p>
                        <Link to='/'>
                            <button>CALL: 9940963631.......</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className='ourservice-container'>
                <div className='about-velavan'>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>Welcome to Velavan Travels - Your Gateway to Unforgettable Rameswaram Experiences</h3>
                    <p data-aos='zoom-in' data-aos-duration='2000'>At Velavan Travels, we're more than just a travel agency. We're your trusted partners in exploring the mesmerizing beauty of Rameswaram. With a passion for adventure and a commitment to excellence, we craft journeys that redefine travel experiences.</p>
                </div>
                <h2 data-aos='zoom-in' data-aos-duration='2000'>Our Services</h2>
                <div className='ourservice-section'>
                    {serviceData.map((data, index) => (
                        <article key={index} className='ourservice-content'>
                            <img data-aos='flip-left' alt={data.alt} data-aos-easing='ease-out-cubic' data-aos-duration='2000' src={data.img} />
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
                        <article key={index} className='service-content'>
                            <img data-aos='flip-left' alt={data.title} data-aos-easing='ease-out-cubic' data-aos-duration='2000' src={data.img} />
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
                        <article key={index} className='brand-content'>
                            <img data-aos='fade-up' alt={data.alt} data-aos-anchor-placement='center-center' src={data.img} />
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

// import React, { useEffect, useState } from 'react'
// import Templebg from '../../images/rameswaram-bg.webp'
// import LowPrice from '../../images/lowprice.png'
// import Staff from "../../images/staff.png"
// import Reliable from "../../images/reliable.png"
// import Toyato from "../../images/toyota-logos.png"
// import Mahindra from "../../images/mahindra_logo.png"
// import Swift from "../../images/swift.png"
// import Templetour from "../../images/sri-ranganathasvamy.png"
// import island from "../../images/Adventures.png"
// import history from "../../images/expedition.png"
// import beach from "../../images/summer-holidays.png"
// import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom'

// const Home = () => {
//     const [offset, setOffset] = useState(0);


//     useEffect(() => {
//         const handleScroll = () => {
//             setOffset(window.pageYOffset);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const whyServiceData = [
//         { img: LowPrice, title: "Low prices", content: "Sri Velavan Travels top-class service at affordable price." },
//         { img: Staff, title: "Experience staff", content: "We hire the best experts in everything concerning car rentals." },
//         { img: Reliable, title: "Reliable support", content: "Our team guarantees reliable support in addition to the offered service" },
//     ]

//     const brandData = [
//         { img: Toyato, alt: "Toyoto" },
//         { img: Mahindra, alt: "Mahindra" },
//         { img: Swift, alt: "Swift" },
//     ]

//     const serviceData = [
//         { img: Templetour, alt: "Temple Tours" },
//         { img: beach, alt: "Beach Retreats" },
//         { img: history, alt: "Historical Expeditions" },
//         { img: island, alt: 'Island Adventures' }
//     ]

//     return (
//         <div className='home'>
//             <Helmet>
//                 <title>Velavan Travels - Explore Rameswaram's Best Travel Experiences</title>
//                 <meta name="description" content="Discover the best travel experiences in Rameswaram with Sri Velavan Travels. Explore temples, beaches, and cultural heritage with expert guides. Book now!" />
//                 <link rel='canonical' href="/" />
//                 <meta name="keywords" content="Velavan Travels, Rameswaram travel, Sri Velavan Travels, Rameswaram tours, Rameswaram temples, Rameswaram beaches, Rameswaram cultural heritage, Rameswaram Sightseeing, Rameswaram Heritage Tours, Rameswaram Cultural Tours, Rameswaram Adventure Tours, Rameswaram Pilgrimage Trips, Rameswaram Wildlife Exploration, Dhanushkodi Excursions, Dhanushkodi Beach Adventures, Dhanushkodi History Tours, Dhanushkodi Sunset Viewing, Dhanushkodi Ruins Exploration, Dhanushkodi Eco Tours, Dhanushkodi Photography Expeditions, Mandapam travel agency, Mandapam tourist information, Mandapam sightseeing tours, Mandapam vacation packages, Mandapam travel experiences, Mandapam travel tips, Mandapam tour operators, mandapam, rameshwaram, ramanathapuram, rameswaram, rameshwaram temple" />
//                 <meta name="author" content="Velavan Travels" />
//                 <meta property="og:title" content="Rameswaram Travel - Explore the Beauty of Rameswaram" />
//                 <meta property="og:description" content="Discover the beauty of Rameswaram with our guided tours and travel packages. Explore Rameswaram's temples, beaches, and cultural heritage with expert guides." />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:url" content="https://www.velavantravels.com" />
//                 <meta property="og:image" content="https://imgur.com/BAD0dFp" />
//                 <meta property="og:image:width" content="1200" />
//                 <meta property="og:image:height" content="630" />
//                 <meta property="og:site_name" content="Rameswaram Travel" />
//                 <meta property="og:locale" content="en_US" />
//             </Helmet>
//             <div className="parallax-container">
//                 <div className="parallax-content">
//                     <img
//                         src={Templebg}
//                         alt="Background"
//                         className="parallax-bg"
//                         style={{ transform: `translateY(${offset * 0.5}px)` }}
//                     />
//                     <div data-aos="zoom-in-up" data-aos-duration="2000" className="parallax-text">
//                         <h1>Sri Velavan Travels</h1>
//                         <p>Travel Agency in Rameswaram, open 24/7 and call to explore Rameshwaram</p>
//                         <Link to="/"> <button>CALL: 9940963631 </button></Link>


//                     </div>
//                 </div>
//             </div>



//             <section className='ourservice-container '>
//                 <div className='about-velavan'>
//                     <h3 data-aos="zoom-in" data-aos-duration="3000">Welcome to Velavan Travels - Your Gateway to Unforgettable Rameswaram Experiences</h3>
//                     <p data-aos="zoom-in" data-aos-duration="2000">At Velavan Travels, we're more than just a travel agency. We're your trusted partners in exploring the mesmerizing beauty of Rameswaram. With a passion for adventure and a commitment to excellence, we craft journeys that redefine travel experiences.</p>
//                 </div>
//                 <h2 data-aos="zoom-in" data-aos-duration="2000">Our Service</h2>
//                 <div className='ourservice-section'>
//                     {serviceData.map((data, index) => (
//                         <article key={index} className='ourservice-content'>
//                             <img data-aos="flip-left"
//                                 alt={data.alt}
//                                 data-aos-easing="ease-out-cubic"
//                                 data-aos-duration="2000" src={data.img} />
//                             <h3 data-aos="zoom-in-down" data-aos-duration="1800">{data.alt}</h3>

//                         </article>
//                     ))}

//                 </div>
//                 <p className='home-mission-2' data-aos="zoom-in-up" data-aos-duration="1800">Welcome to Velavan Travels, where every journey is a story waiting to be told. Established with a passion for travel and a commitment to delivering exceptional experiences, Sri Velavan Travels is your trusted partner in exploring the wonders of Rameshwaram.</p>
//             </section>



//             <section className='service-container'>
//                 <h2 data-aos="zoom-in" data-aos-duration="2000">Why choose our Service</h2>
//                 <div className='service-section'>
//                     {whyServiceData.map((data, index) => (
//                         <article key={index} className='service-content'>
//                             <img data-aos="flip-left"
//                                 alt={data.title}
//                                 data-aos-easing="ease-out-cubic"
//                                 data-aos-duration="2000" src={data.img} />
//                             <h3 data-aos="zoom-in-down" data-aos-duration="1800">{data.title}</h3>
//                             <p data-aos="zoom-in-down" data-aos-duration="1600">{data.content}</p>
//                         </article>
//                     ))}
//                 </div>

//             </section>

//             <section className='brand-container'>
//                 <h2 data-aos="zoom-in" data-aos-duration="2000">The most popular car brands that we rent</h2>
//                 <div className='brand-section'>
//                     {brandData.map((data, index) => (
//                         <article key={index} className='brand-content'>
//                             <img data-aos="fade-up" alt={data.alt}
//                                 data-aos-anchor-placement="center-center" src={data.img} />
//                         </article>
//                     ))}
//                 </div>

//             </section>


//         </div>
//     );
// };

// export default Home;