import React from "react";
import "../styles/home.css";

export default function Home(): React.ReactElement {
    const element = React.createElement;


return element(
    "div",

    {className: "home"},

    element("h1", {className: "home-title"}, "Spooky Movie Finder"),
    element(
        "p",
        { className: "home-subtitle"},
        "Discover and explore terrifyingly good horror movies..."
    )

);
}
