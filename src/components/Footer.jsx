import React, { useEffect, useState } from "react";
import "./Footer.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const { height } = useWindowDimensions();

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  });
  return (
    <div className="footer">
      <div className="footer-upper">
        <a href="">
          <i class="fa-2x fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-2x fa-brands fa-facebook"></i>
        </a>
      </div>
      <div className="footer-lower">
        <p>&#169; Dive nethrani</p>
      </div>
      {visible && (
        <button className={`top`} onClick={handleScrollUp}>
          To Top
        </button>
      )}
    </div>
  );
};

export default Footer;
