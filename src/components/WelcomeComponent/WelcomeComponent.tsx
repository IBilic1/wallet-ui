/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const WelcomeComponent = ({ className }: Props): JSX.Element => {
  return (
    <div className={`welcome-component ${className}`}>
      <p className="p">Wall-ET is an app for educating children on the use of money</p>
      <div className="text-wrapper-3">Welcome!</div>
    </div>
  );
};
