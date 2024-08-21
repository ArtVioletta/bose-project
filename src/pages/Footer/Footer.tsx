import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <img
        src="./assets/image.png"
        alt="Bose Product"
        className="image-footer"
      />
    </div>
  );
};

export default Footer;
