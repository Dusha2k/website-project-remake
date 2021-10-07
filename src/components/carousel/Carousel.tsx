import React from "react";
import Slider from "react-slick";
import "./style.scss";
import first from "../../assets/img/bleach.jpg";
import second from "../../assets/img/naruto.jpg";
import third from "../../assets/img/one-piece.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../button/Button";

const Carousel = (): JSX.Element => {
  const settings = {
    dots: true,
    arrows: false,
    swipe: true,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slick-wrapper">
      <Slider {...settings}>
        <div className="slick-wrapper__content">
          <div style={{ backgroundImage: `url(${first})` }}>
            <h2>Блич</h2>
            <p>
              Встреча с потусторонним переворачивает жизнь японского школьника
              Ичиго, узнав о Сообществе Душ и Пустых...
            </p>
            <Button text="СМОТРЕТЬ" color="red" borderRadius="5px" />
          </div>
        </div>
        <div className="slick-wrapper__content">
          <div style={{ backgroundImage: `url(${second})` }}>
            <h2>Наруто</h2>
            <p>
              Это история, в которой рассказывается про мальчика-ниндзя. Он
              мечтает стать Хокаге: главой своей деревни...
            </p>
            <Button text="СМОТРЕТЬ" color="red" borderRadius="5px" />
          </div>
        </div>
        <div className="slick-wrapper__content">
          <div style={{ backgroundImage: `url(${third})` }}>
            <h2>Ван-Пис</h2>
            <p>
              Перед своей казнью легендарный пират открыл всему миру тайное
              место, где спрятал награбленные сокровища...
            </p>
            <Button text="СМОТРЕТЬ" color="red" borderRadius="5px" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
