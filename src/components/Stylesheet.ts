import React from 'react'
import './styles.css'

export default function Stylesheet(): React.ReactElement {
  const element = React.createElement;
  return element(
    "div",
    {
      className: "background"
    }, 
    element(
      "div",
      null,
      element("h1", {className:"main"}, "Stylesheets"),
      element("h1", {className: "main"}, "Spooky Movie Finder")
    )




    // <div className = "background">
    // <div>
    //   <h1 className = 'main'> Stylesheets</h1>
    //   <h1 className = 'main'>Spooky Movie Finder</h1>
    // </div>
    // </div>
  );
}

//export default Stylesheet
