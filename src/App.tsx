import React, { useEffect, useState } from "react";

import store from "store";

import Header from "./components/Header";
import "./App.css";
import InputForm from "./components/InputForm";
import InputList from "./components/InputList";
import Footer from "./components/Footer";

const styleHeader: React.CSSProperties = {
  gridColumn: "3 / 8",
  gridRow: "1 / 3",
};

const styleInputForm: React.CSSProperties = {
  gridColumn: "6 / 8",
  gridRow: "3 / 6",
};

const styleInputList: React.CSSProperties = {
  gridColumn: "2 / 5",
  gridRow: "3 / 7",
  overflow: "scroll",
};

const styleFooter: React.CSSProperties = {
  gridColumn: "1 / -1",
  gridRow: "8 / 9",
};

const App = () => {
  const [dataForm, setDataForm] = useState(Array);
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    setLocalItems(store.get("List of Items"));
  }, []);

  useEffect(() => {
    store.set("List of Items", dataForm);
    store.set("List of Items", [...dataForm, ...localItems]);
  }, [dataForm, localItems]);

  return (
    <div className="grid-container">
      <Header styleProp={styleHeader} />
      <InputForm
        styleProp={styleInputForm}
        data={dataForm}
        setData={setDataForm}
      />
      <InputList
        styleProp={styleInputList}
        formData={dataForm}
        localList={localItems}
      />
      <Footer styleProp={styleFooter} />
    </div>
  );
};

export default App;
