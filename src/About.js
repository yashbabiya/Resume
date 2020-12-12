import React from "react";
import "./styles.css";
import me from "./me.jpeg";
export default function About() {
  return (
    <div className="About-wrapper">
      <div className="About">
        <img src={me} alt="me" id="me" />
        <h1>
          <span>Hello ,</span>
          <br />A bit about <span>me</span>
          <hr />
        </h1>
        <h2>
          <span>Just</span> A simple Guy Who wants to <span>Create</span>{" "}
          awesome Thing
        </h2>
        <p>
          I'm a <span>Front-end Developer&Programmer</span>.Currrently,I am
          Studing in Birla Vishvakarma Mahavidyalaya in BTech,IT . I love to
          learn HTML,JS,Css by my self , So I build this Site myself.{" "}
        </p>
      </div>
    </div>
  );
}
