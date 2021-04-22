import React from "react";

import "./InputItem.css";

type AppProps = {
  inputStyle: React.CSSProperties;
};

const InputItem = ({ inputStyle }: AppProps) => {
  return <div style={inputStyle}>Item</div>;
};

export default InputItem;
