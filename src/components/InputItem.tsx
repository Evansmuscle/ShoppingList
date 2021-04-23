import React from "react";

import "./InputItem.css";

type AppProps = {
  inputStyle: React.CSSProperties;
  itemData: Object;
};

const InputItem = ({ inputStyle, itemData }: AppProps): any => {
  if (itemData !== {}) {
    <div style={inputStyle}>
      <h1>{itemData}</h1>
    </div>;
  }
};

export default InputItem;
