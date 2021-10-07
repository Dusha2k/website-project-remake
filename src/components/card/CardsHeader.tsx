import React from "react";
import Arrow from "../../assets/icons/arrow_right.svg";
import "./style.scss";

const CardsHeader = ({
  text,
  withArrow,
  onClick,
}: {
  text: string;
  withArrow?: boolean;
  onClick?: () => void;
}): JSX.Element => {
  return (
    <div className="card-header">
      <div className="card-header__wrapper">
        <h4>{text}</h4>
        {withArrow ? (
          <div className="arrow-section" onClick={() => onClick}>
            Посмотреть все
            <span dangerouslySetInnerHTML={{ __html: Arrow }} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardsHeader;
