import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(): React.ReactElement {
  const e = React.createElement;

  return e(
    "nav",
    { className: "navbar" },
    e(
      "div",
      { className: "navbar-container" },
      e(Link, { to: "/", className: "navbar-logo" }, "Movie Finder"),
      e(
        "div",
        { className: "navbar-links" },
        e(Link, { to: "/", className: "navbar-link" }, "Home"),
        e(Link, { to: "/search", className: "navbar-link" }, "Search")
      )
    )
  );
}