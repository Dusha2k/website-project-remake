import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Star from "../../assets/icons/star-solid.svg";
import "./style.scss";
import img from "../../assets/img/details-pic.jpg";

const Card = () => {
  const [video, setVideo] = useState<any>(null);
  const [play, setPlay] = useState<any>(false);

  const fetchAnimeTrailer = async () => {
    setPlay(true);
  };

  return (
    <div
      className="card-wrapper"
      style={{ height: "325px", backgroundImage: `url(${img})` }}
    >
      <div
        className="card-wrapper__img"
        onMouseOver={() => fetchAnimeTrailer()}
        onMouseOut={() => setPlay(false)}
      >
        <span className="series">37/37</span>
        <div>
          <span
            className="svg-icon"
            dangerouslySetInnerHTML={{ __html: Star }}
          />
          8.37
        </div>
      </div>
      <div className="card-wrapper__title">Тетрадь смерти</div>
    </div>
  );
};

export default observer(Card);
