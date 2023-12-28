import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./Corousal.css";
const Corousal = ({ data }) => {
  // console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="crsl">
      <h1>{data.title}</h1>
      <Slider {...settings}>
        {data.data.map((ele) => (
          <div className="card" key={ele.id}>
            <div>
              <img src={ele.image} alt="" />
            </div>

            {ele.title && <h3>{ele.title}</h3>}
          </div>
        ))}
        {/* <div className="card">
          <div>
            <img src="/Images/jetSki.jpg" alt="" />
          </div>

          <h3>Jet Ski</h3>
        </div>
        <div className="card">
          <div>
            <img src="/Images/speedBoat.jpg" alt="" />
          </div>

          <h3>Speed Boat</h3>
        </div>
        <div className="card">
          <div>
            <img src="/Images/parasailing.jpg" alt="" />
          </div>

          <h3>Para Sailing</h3>
        </div>
        <div className="card">
          <div>
            <img src="/Images/underWater1.jpg" alt="" />
          </div>

          <h3>Under Water</h3>
        </div>
        <div className="card">
          <div>
            <img src="/Images/underWater2.jpg" alt="" />
          </div>

          <h3>Under Water</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default Corousal;
