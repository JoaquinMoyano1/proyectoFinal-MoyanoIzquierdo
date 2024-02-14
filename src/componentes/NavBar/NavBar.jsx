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