import React, { useEffect, useState } from "react";

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
  gridColumn: "3 / 5",
  gridRow: "4 / 7",
};

const styleInputList: React.CSSProperties = {
  gridColumn: "6 / 9",
  gridRow: "4 / 8",
  overflow: "scroll",
};

const styleFooter: React.CSSProperties = {
  gridColumn: "1 / -1",
  gridRow: "8 / 9",
};

const App = () => {
  const [dataForm, setDataForm] = useState(Array);

  useEffect(() => {
    console.log(dataForm);
  }, [dataForm]);

  return (
    <div className="grid-container">
      <Header styleProp={styleHeader} />
      <InputForm
        styleProp={styleInputForm}
        data={dataForm}
        setData={setDataForm}
      />
      <InputList styleProp={styleInputList} formData={dataForm} />
      <Footer styleProp={styleFooter} />
    </div>
  );
};

export default App;
