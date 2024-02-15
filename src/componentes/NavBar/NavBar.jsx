import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
      
      <Container>
      <Link to="/" className="navbar-brand">
        <img className='imgLogo' src="./img/LOGO-BANNER.png" alt="logo" />
      </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/3" className="nav-link"> GLITTER</NavLink>
            <NavLink to="/categoria/1" className="nav-link"> COMBOS </NavLink>
            <NavLink to="/categoria/2" className="nav-link"> SERVICIOS </NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>

    </Navbar>
  )
}

export default NavBar;





