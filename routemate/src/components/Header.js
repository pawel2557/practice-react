import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo"> 
                <img src={Logo} alt="where's the logo?" ></img>
                <span>Routemate</span>
            </Link>
            <nav className="navigation">
                <NavLink to="/" className="link" end> home </NavLink>
                <NavLink to="/products" className="link"> products </NavLink>
                <NavLink to="/contact" className="link"> contact </NavLink>
            </nav>
        </header>
    )
}