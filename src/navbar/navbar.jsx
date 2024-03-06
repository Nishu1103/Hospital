import "./navbar.css";
import { NavLink } from 'react-router-dom';
const navbar = () => {
    return (
        <div>
            <>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <input type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1" />
                            <span className="line line2" />
                            <span className="line line3" />
                        </div>
                        <ul className="menu-items">
                        <li>
                        <NavLink exact to="/">Home</NavLink> {/* Use NavLink for Home */}
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink> {/* Use NavLink for About Us */}
                    </li>
                    <li>
                        <NavLink to="/offer">Our Service</NavLink> {/* Use NavLink for Our Service */}
                    </li>
                    <li>
                        <NavLink to="/testimonials">Testimonial</NavLink> {/* Use NavLink for Testimonial */}
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink> {/* Use NavLink for Contact */}
                    </li>
                        </ul>
                        <h1 className="logo">Navbar</h1>
                    </div>
                </nav>
            </>
        </div>
    );
};

export default navbar;
