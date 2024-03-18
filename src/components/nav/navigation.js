import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx"
function Navigation() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [menu, setMenu] = useState(true)

    useEffect(() => {

        const currentPage = location.pathname;


        setActiveLink(currentPage);
    }, [location]);

    return (
        <div className='navbar-section' >
            <Link className={`navbar ${activeLink === '/' ? 'active' : ''}`} to="/">
                Home
            </Link>
            <Link className={`navbar ${activeLink === '/Aboutus' ? 'active' : ''}`} to="/Aboutus">
                About us
            </Link>
            <Link className={`navbar ${activeLink === '/TouristPlace' ? 'active' : ''}`} to="/TouristPlace">
                Tourist Places
            </Link>
            <Link className={`navbar ${activeLink === '/Typesofcars' ? 'active' : ''}`} to="/Typesofcars">
                Car Rental
            </Link>
            <Link className={`navbar ${activeLink === '/Contact' ? 'active' : ''}`} to="/Contact">
                Contact
            </Link>

            {menu ? <></> :

                <div className='hidden-navbar'>
                    <RxCross1 onClick={() => setMenu(true)} className='menu-icon' />
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/">
                        Home
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Aboutus">
                        About Us
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/TouristPlace">
                        Tourist Places
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Typesofcars">
                        Car Rental
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Contact">
                        Contact
                    </Link>
                </div>

            }
            <div className='menu'>
                {menu ? <AiOutlineMenu onClick={() => setMenu(false)} className='menu-icon' /> : <></>}



            </div>


        </div>
    );
}

export default Navigation;
