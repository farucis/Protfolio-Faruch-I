import React from "react";
import "./Interests.css";

const InterestsList = [
  {
    name: "Competitive Gaming",
    info: "I like to challenge my reflexes a lot while competing in tennis games, pushing the rank and having interactive gaming sessions excites me the most.",
    key: 0,
  },
  {
    name: "Music",
    info: "I like to listen to a variety of types of music, but mostly soothing music. Listening to soothing music is something I can never compromise with.",
    key: 1,
  },
  {
    name: "Video Games",
    info: "I like to play video games, especially with my friends. I also play with my friends in the same game.",
    key: 2,
  },
];

const Interests = () => {
  return (
    <div className="interests-container">
      {InterestsList.map((interest, index) => (
        <Interest name={interest.name} info={interest.info} key={index} />
      ))}
    </div>
  );
};

const Interest = (props) => {
  return (
    <div className="interest">
      <div className="interest-name-title">
        <li>{props.name}</li>
      </div>

      <p>{props.info}</p>
    </div>
  );
};

export default Interests;
