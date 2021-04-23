import React, { useEffect } from "react";
// import InputItem from "./InputItem";

import store from "store";

import "./InputList.css";

type AppProps = {
  styleProp: React.CSSProperties;
  formData: any[];
  localList: any[];
};

const InputList = ({
  styleProp,
  formData,
  localList,
}: AppProps): JSX.Element => {
  // useEffect(() => {
  //   store.set("List of Items", localList);
  // }, []);

  return (
    <div style={styleProp} className="input__list">
      {localList
        ? localList.map((el) => {
            return (
              <div key={el.itemName} className="input-item">
                <h3 className="input__list-label input__list--item-name-label">
                  Item Name:
                </h3>
                <p className="input__list-item input__list--item-name">
                  {el.itemName}
                </p>
                <h3 className="input__list-label input__list--item-type-label">
                  Item Type:
                </h3>
                <p className="input__list-item input__list--item-type">
                  {el.itemType[0].toUpperCase(0) + el.itemType.slice(1)}
                </p>
              </div>
            );
          })
        : null}
      {formData.map((el) => {
        return (
          <div key={el.itemName} className="input-item">
            <h3 className="input__list-label input__list--item-name-label">
              Item Name:
            </h3>
            <p className="input__list-item input__list--item-name">
              {el.itemName}
            </p>
            <h3 className="input__list-label input__list--item-type-label">
              Item Type:
            </h3>
            <p className="input__list-item input__list--item-type">
              {el.itemType[0].toUpperCase(0) + el.itemType.slice(1)}
            </p>
            <button>&#9932;</button>
          </div>
        );
      })}
    </div>
  );
};

export default InputList;
