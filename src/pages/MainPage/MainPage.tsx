import HomePage from "../../HomePage/HomePage";
import Recommended from "../Recommended/Recommended";
import Categories from "../Categories/Categories";
import BuyBose from "../BuyBose/BuyBose";
import Footer from "../Footer/Footer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="container">
      <HomePage />
      <Recommended />
      <Categories />
      <BuyBose />
      <Footer />
    </div>
  );
};

export default MainPage;
