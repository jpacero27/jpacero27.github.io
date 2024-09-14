import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Table from "./Table.jsx";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div>
    <Header/>
    <Nav/>
    <Hero/>
    <Card/>
    <Table/>
    <Footer/>

  </div>
);