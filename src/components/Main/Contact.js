import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Phone from "../../images/phone.png"
import Location from "../../images/location.png"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

function Contact() {

    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const isValid = form.current.checkValidity();
        if (!isValid) {
            alert("Please fill in all fields.");
            return;
        }

        emailjs
            .sendForm('service_1xprhkb', 'template_wezrvbn', form.current, {
                publicKey: 'UbU6D7ZiFMzgoURDS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Form submitted successfully!');

                    form.current.reset();
                    setSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    const contactData = [
        { img: Phone, name: "phone", details: "- 9940963631" },
        { img: Location, name: "location", details: "- 12/48, Thulasi Baba, Madam Street, Rameswaram - 623536" },
    ]
    return (
        <div className='contact'>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Discover Rameshwaram with Sri Velavan Travels! Affordable & customized travel packages. Book now for lasting memories on this captivating island." />
                <link rel='canonical' href="https://www.velavantravels.com/Contact" />
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
            <div className='contact-container'>
                <div className='contact-left'>
                    <h2 data-aos="zoom-in" data-aos-duration="2000">Book Your Journey Today</h2>
                    <p data-aos="zoom-out-up" data-aos-duration="2000">Ready to explore the wonders of Rameshwaram with Sri Velavan Travels? Contact us today to book your affordable and customized travel package. Let us be your guide as you create lasting memories on this captivating island.</p>
                    <h5 data-aos="zoom-in-down" data-aos-duration="2000">Sri Velavan Travels - Your Partner in Rameshwaram Exploration!</h5>
                    <Link to="/" > <button data-aos="zoom-in-down" data-aos-duration="2000" className='home-button'>Get in Touch with Velavan Travels </button></Link>
                </div>
                <div className='contact-right'>
                    <h2 data-aos="zoom-in" data-aos-duration="2000">Get in Touch </h2>
                    {contactData.map((data, index) => (
                        <div key={index} className='contact-section'>
                            <img data-aos="flip-left" alt={data.name}
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={data.img} />
                            <p data-aos="zoom-in-down" data-aos-duration="2000" >{data.details}</p>
                        </div>
                    ))}

                </div>

            </div>
            <div className='form-container'>
                <h2 data-aos="zoom-in" data-aos-duration="2000">Get In Touch </h2><br />
                <form data-aos="zoom-in-up" data-aos-duration="2000" className='form' ref={form} onSubmit={sendEmail}>
                    <div className='form-section'>
                        <section>
                            <label>Name: </label>
                            <input type="text" name="user_name" required />
                        </section>

                        <section>
                            <label>Phone no: </label>
                            <input type="number" name="user_number" required />
                        </section>
                    </div>
                    <div className='form-section'>
                        <section>
                            <label>Your Location: </label>
                            <input type="text" name="user_place" required />
                        </section>


                        <section>
                            <label>No of people: </label>
                            <input type="number" name="people" required />
                        </section>

                    </div>
                    <div className='form-section'>
                        <section>
                            <label>No of Days: </label>
                            <input type="number" name="days" required />
                        </section>
                        <section>
                            <label>Message: </label>
                            <textarea name="message" />
                        </section>

                    </div>

                    <button type="submit" required >Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact