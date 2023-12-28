import React, { useState } from "react";
import "./Navbar.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  // const navigate=useNavigate()
  const [display, setDisplay] = useState(false);
  const { height, width } = useWindowDimensions();
  //   console.log(height, width);
  // console.log(display);

  return (
    <div className="navbar">
      {width > 700 ? (
        <>
          <div className="navbar_left">My Logo</div>
          <div className="navbar_right">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              {/* <Link to="#about">
                <li>Why us?</li>
              </Link> */}
              <AnchorLink href="#about">
                <li>Why us?</li>
              </AnchorLink>
              <Link to="book">
                <li>Book</li>
              </Link>
              <Link to="contact-us">
                <li>Contact Us</li>
              </Link>
              <Link to="drop-site">
                <li>Drop Site</li>
              </Link>
            </ul>
          </div>
        </>
      ) : (
        <span className="hammer_bar">
          <button
            onClick={() => {
              setDisplay(!display);
            }}
          >
            button
          </button>
          <>
            {display && (
              <div className="navbar_mobile">
                <ul>
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/gallery">
                    <li>Gallery</li>
                  </Link>
                  <Link to="why-us">
                    <li>Why us?</li>
                  </Link>
                  <Link to="book">
                    <li>Book</li>
                  </Link>
                  <Link to="contact-us">
                    <li>Contact Us</li>
                  </Link>
                  <Link to="drop-site">
                    <li>Drop Site</li>
                  </Link>
                </ul>
              </div>
            )}
          </>
        </span>
      )}
    </div>
  );
};

export default Navbar;
