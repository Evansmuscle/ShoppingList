import React from "react";

import "./Header.css";

type AppProps = {
  styleProp: React.CSSProperties;
};

const Header = ({ styleProp }: AppProps): JSX.Element => {
  return (
    <header className="section__header-header" style={styleProp}>
      SHOPPING LIST
    </header>
  );
};

export default Header;
