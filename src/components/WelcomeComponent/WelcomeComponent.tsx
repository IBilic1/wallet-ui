import React from "react";
import "./style.css";

interface Props {
  className: string;
}

export default function WelcomeComponent({ className }: Props): JSX.Element {
  return (
    <div className={`welcome-component ${className}`}>
      <p className="p">Wall-ET is an app for educating children on the use of money</p>
      <div className="text-wrapper-3">Welcome!</div>
    </div>
  );
}
