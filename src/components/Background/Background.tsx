import React from "react";

import "./style.css";

interface Props {
  className: string;
}

export default function Background({ className }: Props): JSX.Element {
  return (
    <div className={`background ${className}`}>
    </div>
  );
}
