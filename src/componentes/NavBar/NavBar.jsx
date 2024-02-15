import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/" className="navbar-brand">
          <img className='imgLogo' src="./img/randombull.png" alt="logo" />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/3" className="nav-link">fitisios</NavLink>
            <NavLink to="/categoria/2" className="nav-link">reales</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
      
    </Navbar>
  )
}

export default NavBar;


 {/*
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='imgLogo' src="./img/randombull.png" alt="logo" />
      </Link>

        <nav>
            <ul>

                <li>
                  <NavLink to="/categoria/3">
                    fitisios
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">
                    reales
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar
*/}
