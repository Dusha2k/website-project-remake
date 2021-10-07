import React from "react";
import Header from "./layouts/Header/Header";
import Carousel from "./components/carousel/Carousel";
import Card from "./components/card/Card";
import CardsHeader from "./components/card/CardsHeader";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
        <Carousel />
        <div style={{ width: "250px", marginTop: "100px" }}>
          <CardsHeader text="Текущие" withArrow={true} />
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
