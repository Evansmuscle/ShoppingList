import React from "react";

import "./InputForm.css";

type AppProps = {
  styleProp: React.CSSProperties;
};

const InputForm = ({ styleProp }: AppProps) => {
  return (
    <div style={styleProp} className="input__form">
      <div className="input__form--content input__form--content-1">
        <label className="input__form-content--label input__form-content--label-1">
          Enter Item Type:
        </label>
        <input className="input__form-content--input input__form-content--input-1" />
      </div>
      <div className="input__form--content input__form--content-2">
        <label className="input__form-content--label input__form-content--label-2">
          Enter Item Name:
        </label>
        <input className="input__form-content--input input__form-content--input-2" />
      </div>
    </div>
  );
};

export default InputForm;
