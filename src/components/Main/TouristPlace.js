import React from 'react'
import Temple from '../../images/temple.webp'
import Arichalmunai from '../../images/arichal-munai.webp'
import Dhanushkodi from '../../images/dhanushkodi.jpg'
import Hanuman from '../../images/hanuman-temple.jpg'
import Kalamhall from '../../images/kalam-hall.jpg'
import Kalamhouse from '../../images/kalamhouse.jpg'
import Nataraj from '../../images/nataraj.jpg'
import Seethatheertham from '../../images/seethatheetham.jpg'
import Srikrishna from '../../images/sri-krishna.jpg'
import Paravatham from '../../images/gandamadana-parvatham.jpg'
import Bridge from "../../images/pamban.jpg"
import Kodhandam from "../../images/kothandaramaswamytemple.jpg"
import Flood from "../../images/floodingstone.jpg"
import { Helmet } from 'react-helmet'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

AOS.init();

function TouristPlace() {

    const PlacesToShow = [
        { image: Temple, name: 'Rameshwaram Temple', msg: 'The Ramanathaswamy Temple is the most notable historic landmark of the town. Located in the centre of town, It is a famous Hindu temple dedicated to the deity Shiva. The temple is one of the 12 Jyotirlinga shrines, where Shiva is worshipped in the form of a Jyotirlinga, meaning "pillar of light".' },
        { image: Bridge, name: 'Pamban Bridge', msg: "Pamban Bridge is a railway bridge that connects the town of Mandapam in mainland India with Rameswaram on Pamban Island. Opened on 24 February 1914, it was India's first sea bridge, and was the longest sea bridge in India until the opening of the Bandra-Worli Sea Link in 2010." },
        { image: Seethatheertham, name: 'Seetha Theertham', msg: "Sita Theertham is located opposite to the Panchamukha (Five faced) Hanuman temple. It is also close to Lakshmana Theertham. It is believed that Sita took bath in this Theertham after returning from Lanka and took rest nearby. A big floating stone and fishes in the pond are the main attractions there. This is also in the town near the main temple." },
        { image: Arichalmunai, name: 'Arichal Munai', msg: "The end point is called Arichal Munai in the local language, meaning Erosion point. It's about 20 kilometres (12.5 miles) from Rameshwaram on the Pamban Island and about 30 kilometres (18.5 miles) from Talaimannar in Sri Lanka." },
        { image: Dhanushkodi, name: 'Dhanushkodi', msg: "The town of Dhanushkodi is believed to be the place where Lord Rama had ordered Lord Hanumana to build a bridge which could carry his army across to Sri Lanka, where Demon King Ravana had kept Sita captive. As ordered, Lord Hanuman had obliged and it was here that the Ram Setu was built by the Vanara Sena." },
        { image: Hanuman, name: 'Panjamugi Hanuman', msg: "The Rameshwaram Panchamukhi Hanuman Temple is believed to have been first located in Dhanushkodi, but the idol was later brought to mainland Rameshwaram after the 1964 cyclone destroyed the original temple." },
        { image: Kalamhall, name: 'Abdul Kalam Memorial Hall', msg: "The place is very well maintained although there is no entry fee. Backpacks and camera are not allowed inside, but one can carry mobile which has to be switched off. The memorial is very organized with hundreds of photographs framed and walled depicting the work of the great leader and scientist." },
        { image: Kalamhouse, name: 'House of Kalam', msg: "One of India's most significant leaders spent his formative years in this modest home on Mosque Street in Rameswaram. He shared a house with his brother, Ashiamma, Jainulabdeen, and his parents. In 2011, APJ Abdul Kalam's old house was transformed into a museum, and it is now open for public visitation." },
        { image: Nataraj, name: 'Nadarajar Temple', msg: "The significance of the Nataraja (Nataraj) sculpture is said to be that Shiva is shown as the source of all movement within the cosmos, represented by the arch of flames. The purpose of the dance is to release men from illusion of the idea of the 'self' and of the physical world." },

        { image: Srikrishna, name: 'Sri Krishna Temple', msg: "Shree Krishna Pranami Mangal Mandir is a important place in rameswaram.it  located 200 meter from the Lakshman Tirtham. The stay offers two and three bedded AC/NON-AC rooms for families. Parking facilities for vehicles are available. " },
        { image: Paravatham, name: 'Ramar Patham', msg: "this is the place where Lord Rama stood and planned for the bridge, before he finally built the (Ram Sethu) across the sea. It is also mentioned in the Ramayana that this is the same place where Hanuman rested with his team mates before he flew to Sri Lanka in search of Sita." },

        { image: Kodhandam, name: 'Kothanda Ramar Temple', msg: 'This is the only temple in whole india dedicated to King vibhishan. This is the place where Sri Ram ji coronated King Vibhishan for Srilanka Throne instead of Ravana before and after the war. This is the place where Vibhishan has approached first Sri Ram and Hanuman ji army. This temple is on the way to Dhanuskodi.' },
        { image: Flood, name: 'Flooding Stone', msg: "The Ram Setu Or The Adam's Bridge is actually a chain of limestone shoals between Rameshwaram, India, and Mannar Island, Sri Lanka." },

    ]


    return (
        <div className='tourist-place'>
            <Helmet>
                <title>Places to Visit in Rameswaram - Sri Velavan Travels</title>
                <meta name="description" content="Discover the top tourist places in Rameswaram with Sri Velavan Travels. Explore Rameswaram's temples, beaches, and cultural heritage with our expert guides." />
                <link rel='canonical' href="https://www.velavantravels.com/Tourist-Place" />
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
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Rameswaram Travel" />
                <meta property="og:locale" content="en_US" />
            </Helmet>
            <section className='place-section'>
                <h1 data-aos="zoom-in" data-aos-duration="2000">Places to visit</h1>
                <Link data-aos="zoom-in" data-aos-duration="2000" to="/" className='home-link'><h4 className='home-h5'>Choose Place  and Explore Rameshwaram with Velavan Travels</h4></Link>
                <article className='place-article' >
                    {PlacesToShow.map((data, index) => (
                        <div key={index} className='place-content' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={data.image} alt={data.name} loading="lazy" />
                            <div className='article-text'>
                                <h4 data-aos="zoom-in" data-aos-duration="3000">{data.name}</h4>
                                <p className='hidden-card'>{data.msg}</p>
                            </div>
                        </div>
                    ))}
                </article >

            </section>
        </div>
    )
}

export default TouristPlace
