import React from "react";
import "./RecommendedItem.css";
import { IRecommended } from "../../shared/interfaces/IRecommended";

const RecommendedItem: React.FC<IRecommended> = ({
  image,
  content,
  text,
  price,
}) => {
  return (
    <div className="recommended-item">
      <img src={image} alt={text} />
      <h3 className="product-title">{content}</h3>
      <p>{text}</p>
      <p className="price">${price}</p>
    </div>
  );
};

export default RecommendedItem;
