import { productsCategories } from "../../data/productsCategories";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import "./Categories.css";
const Categories = () => {
  return (
    <div id="categories" className="productsCategories">
      <h1 className="productsTitle">
        Browse Bose
        <br /> products by category
      </h1>
      <div className="categories-items-container">
        {productsCategories.map((el, index) => (
          <CategoriesItem
            key={index}
            image={el.image}
            imagetwo={el.imagetwo}
            text={el.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
