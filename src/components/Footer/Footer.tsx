/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import {Box} from "@mui/material";

interface Props {
  className: any;
  dividerClassName: any;
}

export const Footer = ({ className, dividerClassName }: Props): JSX.Element => {
  return (
    <div className={`footer ${className}`}>
      <div className={`divider ${dividerClassName}`} />
      <img className="socials" alt="Socials" src="/src/assets/img/socials-1.svg" />
      <div className="terms-privacy">
        <div className="down-menu">
          <div className="pricing">Terms</div>
          <div className="text-wrapper">Privacy</div>
          <div className="div">Cookies</div>
        </div>
      </div>
    </div>
  );
};
