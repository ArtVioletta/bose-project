import { productsCategories } from "../../data/productsCategories";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import "./Categories.css";
const Categories = () => {
  return (
    <div className=" container" id="categories">
      <h1 className="productsBose">
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
