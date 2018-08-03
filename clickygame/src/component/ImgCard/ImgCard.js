import React from "react";
import "./ImgCard.css";

const ImgCard = props => (
  
      <img src={props.image} alt={props.name} clicked={props.clicked.toString()} id={props.id} name={props.name} className="img-thumbnail img" onClick={props.onClick}/>   
);

export default ImgCard;
