import React from "react";

import "./Footer.css";

type FooterProps = {
  styleProp: React.CSSProperties;
};

const Footer = ({ styleProp }: FooterProps) => {
  return <div style={styleProp}>Footer</div>;
};

export default Footer;
