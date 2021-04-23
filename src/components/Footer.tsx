import React from "react";

import "./Footer.css";

type FooterProps = {
  styleProp: React.CSSProperties;
};

const Footer = ({ styleProp }: FooterProps) => {
  return (
    <div className="footer" style={styleProp}>
      <div className="footer__links">
        <a href="https://twitter.com/sleepywebdev" className="link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/Evansmuscle" className="link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/khankorkmaz/" className="link">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer__copyright">
        &copy; Copyrighted Material of Yiğit Kaan Korkmaz.
      </div>
    </div>
  );
};

export default Footer;
