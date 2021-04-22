import React from "react";
import InputItem from "./InputItem";

import "./InputList.css";

type AppProps = {
  styleProp: React.CSSProperties;
};

const styleInputItem: React.CSSProperties = {};

const InputList = ({ styleProp }: AppProps) => {
  return (
    <div style={styleProp} className="input__list">
      <div className="input__list--type">Type</div>
      <div className="input__list--options">Options</div>
      <InputItem inputStyle={styleInputItem} />
    </div>
  );
};

export default InputList;
