import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "@components/common/primary-button";

const ClassTrialRowButton = (props) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",

        borderRadius: 6,

        width: "100%",
      }}
    >
      <div style={{ flex: 1 }}></div>
      <div>
        <PrimaryButton shadow>{props.children}</PrimaryButton>
      </div>
    </div>
  );
};
export default ClassTrialRowButton;
