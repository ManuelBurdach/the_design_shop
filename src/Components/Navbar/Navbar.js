import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">The Design Shop</Link>
      </h1>
      <div>
        <NavLink to="/f">Featured</NavLink>
        <NavLink to="/a">Lifestyle</NavLink>
        <NavLink to="/b">Books</NavLink>
        <NavLink to="/c">Digital</NavLink>
        <p>|</p>
        <NavLink to="/d">Weekly Picks</NavLink>
        <NavLink to="/e">The Design Blog</NavLink>
      </div>
      <div>
        <p>BurgerMenu</p>
      </div>
    </nav>
  );
};

export default Navbar;
