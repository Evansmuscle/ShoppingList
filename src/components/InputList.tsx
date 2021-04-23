import React from "react";
import InputItem from "./InputItem";

import "./InputList.css";

type AppProps = {
  styleProp: React.CSSProperties;
  formData: any[];
};

const InputList = ({ styleProp, formData }: AppProps): JSX.Element => {
  return (
    <div style={styleProp} className="input__list">
      {formData.map((el) => {
        return (
          <React.Fragment key={el.itemName}>
            <h3>Item Name:</h3>
            <p>{el.itemName}</p>
            <h3>Item Type:</h3>
            <p>{el.itemType[0].toUpperCase(0) + el.itemType.slice(1)}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default InputList;
