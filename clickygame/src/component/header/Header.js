import React from "react";
import "./Header.css";

const Title = props => <h1 className="title">{props.children} <span id="score">Score:{props.score}</span></h1>

export default Title;
