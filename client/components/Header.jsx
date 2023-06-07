import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  //styling when link is active
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link to="/" className="site-logo">SITE NAME HERE</Link>
      <nav>
        <NavLink to="something" style={({isActive}) => isActive ? activeStyles : null}>SOMETHING HERE</NavLink>
      </nav>
    </header>
  );
}
