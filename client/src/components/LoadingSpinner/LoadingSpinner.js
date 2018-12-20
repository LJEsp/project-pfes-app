import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div style={{position: "absolute"}}>
      <div className="lds-rolling">
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;
