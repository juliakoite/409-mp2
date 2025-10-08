// import './App.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
//import Stylesheet from './components/Stylesheet';
//import axios from 'axios';
// import React from "react";
// import navbar from "./components/navbar";
// import home from "./pages/home";
// import search from "./pages/search";
// import details from "./pages/details";



import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import navbar from "./components/navbar";
import home from "./pages/home";
import search from "./pages/search";
import details from "./pages/details";

export default function App(): React.ReactElement {
  const e = React.createElement;

  return e(
    BrowserRouter,
    null,
    e(navbar),
    e(
      Routes,
      null,
      e(Route, { path: "/", element: e(home) }),
      e(Route, { path: "/search", element: e(search) }),
      e(Route, { path: "/movie/:id", element: e(details) })
    )
  );
}
  // const getMovie = () =>{
  //   axios.get().then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  // return (
  //   <div className="App">
  //     <Stylesheet/> 
  //     <button onClick={getMovie}>Get Movie</button>
  //   </div>


  // );


//export default App;
