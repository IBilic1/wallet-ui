import React from 'react'

import './style.css'

interface Props {
  className: string;
  walletapptemplateClassName: string;
  walletapptemplate: string;
  divClassName: string;
}

export default function AppNameButton({ className, walletapptemplateClassName, walletapptemplate = "../../assets/img/logo.png", divClassName }: Props): JSX.Element {
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
}