import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <strong>
        <Link to="/">Home</Link>
      </strong>
      <strong>
        <Link to="/about">About</Link>
      </strong>
    </div>
  );
}
