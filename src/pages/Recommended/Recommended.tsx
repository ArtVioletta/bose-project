import React from "react";
import "./Recommended.css";
import { recommendedBose } from "../../data/recommendedBose";
import RecommendedItem from "../RecommendedItem/RecommendedItem";

const Recommended = () => {
  return (
    <div className="bose" id="recommended">
      <h1 className="textRec">Recommended</h1>
      <div className="recommended-items-container">
        {recommendedBose.map((el, index) => (
          <RecommendedItem
            key={index}
            image={el.image}
            price={el.price}
            content={el.content}
            text={el.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
