import React from "react";
import { NavLink } from "react-router-dom";

export default function MyLink({ link }) {
  return (
    <NavLink to={link} className="nav-link text-capitalize">
      {link}
    </NavLink>
  );
}
