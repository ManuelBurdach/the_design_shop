//Modul import
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Css import
import "./Navbar.css";

const Navbar = () => {
  //Burgermenu toggle (default false)
  const [toggle, setToggle] = useState("false");

  return (
    <nav className={toggle ? "" : "navActive"}>
      {/* Logo (headline - companyname) */}
      <h1>
        <Link to="/">The Design Shop</Link>
      </h1>
      {/* Navigation */}
      <div className={toggle ? "" : "menuActive"}>
        <NavLink to="/shop/electronic">Electronic</NavLink>
        <NavLink to="/shop/lifestyle">Lifestyle</NavLink>
        <NavLink to="/shop/books">Books</NavLink>
        <NavLink to="/shop/home">Home</NavLink>
        <p>|</p>
        <NavLink to="/weeklypicks">Weekly Picks</NavLink>
        <NavLink to="/thedesignblog">The Design Blog</NavLink>
      </div>
      {/* Burgermenu default false */}
      <div onClick={() => setToggle(!toggle)}>
        <div className={toggle ? "" : "rotate45"}></div>
        <div className={toggle ? "" : "rotate45"}></div>
        <div className={toggle ? "" : "rotateM45"}></div>
      </div>
    </nav>
  );
};

export default Navbar;
