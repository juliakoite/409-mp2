// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement(App));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // optional global styles

const container = document.getElementById("root");

if (!container) {
  throw new Error("❌ Root container missing in index.html");
}

// Create React element manually (no JSX)
const element = React.createElement(App);

// Mount app to the DOM
const root = createRoot(container);
root.render(element);