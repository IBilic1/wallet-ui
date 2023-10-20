/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import logo from "../../assets/img/logo.png"

interface Props {
  className: any;
  walletapptemplateClassName: any;
  walletapptemplate: string;
  divClassName: any;
}

export const AppNameButton = ({
  className,
  walletapptemplateClassName,
  walletapptemplate = "../../assets/img/logo.png",
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`app-name-button ${className}`}>
      <img
        className={`walletapptemplate ${walletapptemplateClassName}`}
        alt="Walletapptemplate"
        src={walletapptemplate}
      />
      <div className={`text-wrapper-2 ${divClassName}`}>Wall-ET</div>
    </div>
  );
};

AppNameButton.propTypes = {
  walletapptemplate: PropTypes.string,
};
