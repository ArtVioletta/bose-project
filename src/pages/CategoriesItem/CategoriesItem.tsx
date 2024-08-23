import React from "react";
import { ICategories } from "../../shared/interfaces/ICategories";
import "./CategoriesItem.css";

const CategoriesItem: React.FC<ICategories> = ({ image, imagetwo, text }) => {
  return (
    <div className="categories-buy">
      <div className="categories-bose ">
        <img src={image} alt={text} className="categories-item" />
        <img src={imagetwo} alt={text} className="imageTwo" />
      </div>
      <h3 className="text-categories">{text}</h3>
    </div>
  );
};

export default CategoriesItem;
