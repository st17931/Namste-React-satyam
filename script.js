import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement('h1',{style:"red"},"Hi this is Satyam Tripathi");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);