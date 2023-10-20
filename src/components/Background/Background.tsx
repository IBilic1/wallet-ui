/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Footer } from "../Footer";
import "./style.css";

interface Props {
  className: any;
  footerFooterClassName: any;
  footerDividerClassName: any;
  navbarDividerClassName: any;
}

export const Background = ({
  className,
  footerFooterClassName,
  footerDividerClassName,
  navbarDividerClassName,
}: Props): JSX.Element => {
  return (
    <div className={`background ${className}`}>
      <Footer className={footerFooterClassName} dividerClassName={footerDividerClassName} />
      <div className={`navbar-divider ${navbarDividerClassName}`} />
    </div>
  );
};
