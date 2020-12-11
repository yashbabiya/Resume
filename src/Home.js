import React from "react";
import "./styles.css";
import logo from "./lo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function Home() {
  return (
    <div className="Home">
      <img src={logo} alt="j" />
      <h2>I'm Yash Babiya</h2>
      <div className="icon-wrapper">
        <InstagramIcon id="icons" />
        <GitHubIcon id="icons" />
        <LinkedInIcon id="icons" />
        <br />
      </div>
      Anjani,Motavarachha,Surat,394101
      <br />
      9712396547
    </div>
  );
}
