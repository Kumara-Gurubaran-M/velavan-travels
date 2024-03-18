import React from 'react'
import { Link } from 'react-router-dom';
import Phone from "../images/call.png"
import Location from "../images/location (1).png"
function Footer() {

    const contactData = [
        { img: Phone, details: "- 9940963631" },
        { img: Location, details: "- 12/48, Thulasi Baba, Madam Street, Rameswaram - 623536" },
    ]
    return (
        <>
            <footer>
                <section className='footer-1'>
                    <h5>Join Us on Your Next Adventure</h5>
                    <p>Your adventure begins with Sri Velavan Travels — Where Every Step Unveils a New Story!</p>
                </section>
                <section>
                    <h5>Quick Links</h5>
                    <div className='footer-links'>
                        <Link to="/" className='link'>
                            Home
                        </Link>
                        <Link to="/Aboutus" className='link'>
                            About us
                        </Link>
                        <Link to="/TouristPlace" className='link'>
                            Tourist Places
                        </Link>
                        <Link to="/Typesofcars" className='link'>
                            Car Rental
                        </Link>
                        <Link to="/Contact" className='link'>
                            Contact
                        </Link>
                    </div>
                </section>
                <section>
                    <h5>Get in Touch</h5>
                    <>
                        {contactData.map((data, index) => (
                            <div className='contact-section'>
                                <img src={data.img} />
                                <p >{data.details}</p>
                            </div>
                        ))}
                    </>
                </section>
            </footer>
            <div className='copyright'>
                <h6>@2024 Copyrights Reserved</h6>
            </div>
        </>
    )
}

export default Footer