// react
import React from "react";

// prop-types
import { string } from "prop-types";

// styles
import "./footer.css";

const Footer = ({ footerText }) => {
  return (
    <div className="footer">
      <p>{footerText}</p>
    </div>
  );
};

Footer.propTypes = {
  footerText: string,
};

Footer.defaultProps = {
  footerText: "Footer",
};

export default Footer;
