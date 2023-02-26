import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState("false");
  const menu = () => {
    setToggle(!toggle);
    if (toggle) {
      console.log("true");
    } else {
      console.log("false");
    }
  };
  return (
    <nav className={toggle ? "" : "navActive"}>
      <h1>
        <Link to="/">The Design Shop</Link>
      </h1>
      <div className={toggle ? "" : "menuActive"}>
        <NavLink to="/shop1">Featured</NavLink>
        <NavLink to="/shop2">Lifestyle</NavLink>
        <NavLink to="/shop3">Books</NavLink>
        <NavLink to="/shop4">Digital</NavLink>
        <p>|</p>
        <NavLink to="/shop5">Weekly Picks</NavLink>
        <NavLink to="/shop6">The Design Blog</NavLink>
      </div>
      <div onClick={menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
