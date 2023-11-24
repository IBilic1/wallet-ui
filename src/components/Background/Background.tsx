import React from "react";

import "./style.css";
import background from "../../assets/img/backgroundWave3.svg"

export default function Background(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | null | undefined; }) {
  const containerStyle = {
    width: '100%',
    height: '150vh',
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  return (
      <div style={containerStyle}>
        {props.children}
      </div>
  );
}

