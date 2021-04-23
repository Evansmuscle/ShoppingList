import React, { SetStateAction, useState } from "react";

import "./InputForm.css";

type AppProps = {
  styleProp: React.CSSProperties;
  data: any[];
  setData: React.Dispatch<SetStateAction<any[]>>;
};

const InputForm = ({ styleProp, setData }: AppProps) => {
  const [itemType, setItemType] = useState("food");
  const [itemName, setItemName] = useState("");

  const submitHandler = (event: any): any => {
    event.preventDefault();

    setData((data) => [...data, { itemType, itemName }]);
  };

  return (
    <form style={styleProp} className="input__form" onSubmit={submitHandler}>
      <div className="input__form--content input__form--content-1">
        <label
          htmlFor="type"
          className="input__form-content--label input__form-content--label-1"
        >
          Choose Item Type:
        </label>
        <div className="select-wrapper">
          <select
            name="type"
            onChange={(e) => setItemType(e.currentTarget.value)}
            className="input__form-content--input input__form-content--input-1"
          >
            <option value={"food"}>Food</option>
            <option value={"hygiene"}>Hygiene</option>
            <option value={"clothing"}>Clothing</option>
            <option value={"drinks"}>Drinks</option>
          </select>
        </div>
      </div>
      <div className="input__form--content input__form--content-2">
        <label
          htmlFor="name"
          className="input__form-content--label input__form-content--label-2"
        >
          Enter Item Name:
        </label>
        <input
          name="name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="input__form-content--input input__form-content--input-2"
        />
      </div>
      <input type="submit" value="Submit" className="input__form--submit" />
    </form>
  );
};

export default InputForm;
