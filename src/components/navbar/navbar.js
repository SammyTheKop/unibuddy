// react
import React from "react";

// prop-types
import { string } from "prop-types";

// styles
import "./navbar.css";

const Navbar = ({ navbarText }) => {
  return (
    <ul>
      <li>
        <p>{navbarText}</p>
      </li>
    </ul>
  );
};

Navbar.propTypes = {
  navbarText: string,
};

Navbar.defaultProps = {
  navbarText: "Unibuddy Front End Challenge",
};

export default Navbar;
