import { PRIMARY_COLOR } from "@assets/css/theme";
import React from "react";
import { Button } from "react-bootstrap";

const PrimaryButton = (props) => {
  const { onClick = () => {}, shadow = false } = props;
  const additionalStyle = props.disabled ? { backgroundColor: "grey" } : {};
  const shadowStyle = { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" };
  return (
    <button
      type="submit"
      className="bd-btn"
      onClick={onClick}
      style={{
        ...additionalStyle,
        ...props.style,
        ...(shadow ? shadowStyle : {}),
      }}
    >
      <span className="bd-btn-inner">
        <span className="bd-btn-normal">
          {/* <i className="fa-sharp fa-solid fa-paper-plane"></i> */}
          {props.children}
        </span>
        <span className="bd-btn-hover">
          {/* <i className="fa-sharp fa-solid fa-paper-plane"></i> */}
          {props.children}
        </span>
      </span>
    </button>
  );
};

export default PrimaryButton;
