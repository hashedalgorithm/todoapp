import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler;
  cName?: string;
};
const Button = ({ text, onClick, cName }: ButtonProps) => {
  return (
    <button
      // className={cName ? cName : ""}
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        color: "var(--secondary)",
        backgroundColor: "var(--primary)",
        fontWeight: 600,
        outline: "none",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "0 1rem",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
