import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import "./style.scss";

type IButton = {
  text?: string;
  color?: "red" | "light-blue" | "dark-blue" | "blue" | "grey";
  src?: string;
  customClass?: string;
  borderRadius?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  color,
  onClick,
  customClass,
  src,
  borderRadius = "1px",
  ...props
}: IButton): JSX.Element => {
  return (
    <button
      {...props}
      className={cn(
        "btn tracking-widest font-bold size text-sm",
        color,
        customClass
      )}
      onClick={onClick}
      style={{ borderRadius: borderRadius }}
    >
      {src && <img src={src} alt="#" />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
