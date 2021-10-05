import "./styles/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button/Button";

const App = () => {
  return (
    <>
      <div className="p-10">
        <Button text="СМОТРЕТЬ" color="red" borderRadius="30px" />
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
