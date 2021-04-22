import React from "react";

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
};

const App: React.FC = () => {
  return (
    <div className="grid-container">
      <Header styleProp={styleHeader} />
      <InputForm styleProp={styleInputForm} />
      <InputList styleProp={styleInputList} />
      <Footer />
    </div>
  );
};

export default App;
