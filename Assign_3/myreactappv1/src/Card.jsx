import React from "react";
import "./index.css";

function createCard()
{
 return( 
 <div className="cardShape">
  <img src="../public/img/img1.png" alt="logo" />
  <h1>Lincese</h1>
  {/* <p>Card1 description</p>
  <p>Card1 additional description</p> */}
  </div>);
}

function Card()
{

  return(
   <div className="cardContainer">
   {createCard()}
    {createCard()}
   {createCard()} 
   </div>
   
  );
}

export default Card;
