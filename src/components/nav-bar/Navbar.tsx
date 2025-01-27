import { Link } from 'react-router-dom';
import { LINKS } from '../../types/consts';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">{LINKS.HOME}</Link>
        </li>
        <li>
          <Link to="/testimonials" className="navbar-link">{LINKS.TESTIMONIALS}</Link>
        </li>
        <li>
          <Link to="/our-memories" className="navbar-link">{LINKS.OUR_MEMORIES}</Link>
        </li>
        <li>
          <Link to="/notice-board" className="navbar-link">{LINKS.NOTICE_BOARD}</Link>
        </li>
        <li>
          <Link to="/contact-us" className="navbar-link">{LINKS.CONTACT_US}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
