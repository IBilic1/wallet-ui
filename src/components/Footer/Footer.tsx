import React from "react";
import socials from "../../assets/img/socials-1.svg";
import { Box } from "@mui/material";


interface Props {
  className: string;
}

export default function Footer({ className }: Props): JSX.Element {
  return (
    <div className={`footer ${className}`}>
      <img className="socials" alt="Socials" src={socials} />
      <Box component="div" sx={{ alignSelf: "end" }} className="terms-privacy">
        <div className="down-menu">
          <div className="pricing">Terms</div>
          <div className="text-wrapper">Privacy</div>
          <div className="div">Cookies</div>
        </div>
      </Box>
    </div>
  );
}
