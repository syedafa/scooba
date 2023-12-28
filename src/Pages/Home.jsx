import React from "react";
import "../styles/home.css";
// import Icons from "../components/Icons";
import Contacts from "../components/Contacts";
import Corousal from "../components/Corousal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const otherSports = {
    title: "OTHER SPORTS",
    data: [
      { id: 1, title: "Jet Ski", image: "/Images/jetSki.jpg" },
      { id: 2, title: "Speed Boat", image: "/Images/speedBoat.jpg" },
      { id: 3, title: "Para Sailing", image: "/Images/parasailing.jpg" },
    ],
  };
  const gallery = {
    title: "GALLERY",
    data: [
      { id: 1, image: "/Images/underWater1.jpg" },
      { id: 2, image: "/Images/underWater2.jpg" },
      { id: 3, image: "/Images/underWater3.jpg" },
      { id: 4, image: "/Images/underWater4.jpg" },
      { id: 5, image: "/Images/underWater5.jpg" },
      { id: 6, image: "/Images/underWater6.jpg" },
      { id: 7, image: "/Images/underWater7.jpg" },
      { id: 8, image: "/Images/underWater8.jpg" },
    ],
  };
  return (
    <div>
      {/* banner section */}
      <div className="banner"></div>
      {/* why dive with us ? */}
      <div id="about" className="w-d-w-u">
        <h1>Why Dive with us ?</h1>
        <div className="dotted-line"></div>
        <div className="para">
          <p>
            Set up in Murudeshwar in 2008, no one has been diving at Netrani
            Island longer than us! Dive Netrani offers a range of{" "}
            <strong>SSI</strong> and <strong>PADI</strong> certification courses
            and Introductory dives, all run to international standards of
            expertise, equipment, and safety. With crystal clear waters teeming
            with marine life, Netrani Island offers the best scuba diving on the
            West coast of India. This is some of the best diving in India, and
            its only a easy weekend trip from Mumbai, Pune, Hyderabad, Goa and
            Bangalore !
          </p>
        </div>
      </div>
      {/* why dive in netrani */}
      <div className="w-d-w-u">
        <h1>Why Dive in nethrani ?</h1>
        <div className="dotted-line"></div>
        <div className="para">
          <p>
            Netrani offers the easiest access to clear water diving in India.
            The visibility is usually over 15 meters, water temperatures are in
            the 27 to 30 degree range and the marine life rich in variety. These
            dive sites have coral reefs, rock pinnacles and shipwrecks. The
            warm, crystal clear waters around Netrani Island, make it an ideal
            destination for beginners to learn scuba diving and for seasoned
            recreational divers to enjoy the challenge of deeper dive sites!
          </p>
        </div>
        {/* <div className="icons">
          <Icons
            icon="fa-2x fa-solid fa-temperature-three-quarters"
            title="Temprature"
            content="28-30 DEGREE CELCIUS"
          />

          <Icons
            icon="fa-2x fa-solid fa-anchor"
            title="Depths"
            content="8-30 METERS"
          />
          <Icons
            icon="fa-2x fa-solid fa-eye"
            title="Visibility"
            content="15-25 METERS"
          />
          <Icons
            icon="fa-2x fa-solid fa-cloud"
            title="Season"
            content="OCTOBER TO MAY"
          />
        </div> */}
      </div>
      {/* gallery */}
      <div className="slider">
        <Corousal data={gallery} />
      </div>
      {/* map */}
      <div className="map">
        <div>
          <h1>commerce center</h1>
        </div>
        <div className="iframe">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5247.194246097125!2d74.32448764183903!3d14.016933735523859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc4e91320ed9ad%3A0x987abe00a7afa41d!2sNetrani%20Island!5e1!3m2!1sen!2sin!4v1701673907804!5m2!1sen!2sin"
            frameborder="0"
          ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.0689755643485!2d74.83144683208957!3d12.924145853279441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350893ddaaab3%3A0x50f01e16cb65bb76!2sCommerce%20Center!5e1!3m2!1sen!2sin!4v1701685543990!5m2!1sen!2sin"></iframe>
        </div>
      </div>

      {/* hashtag */}
      <div className="hashtag">
        <div className="heading">
          <h1>#Nethrani Dive</h1>
        </div>

        <div className="links">
          <a href="www.instagram.com">
            <span>FOLLOW ON INSTAGRAM</span>{" "}
            <i class="fa-solid fa-greater-than"></i>
          </a>
          <a href="www.facebook.com">
            <span>FOLLOW ON FACEBOOK</span>{" "}
            <i class="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>
      {/* other sports */}
      <div className="slider">
        <Corousal data={otherSports} />
      </div>
      {/* drop us a line */}
      <div className="drop">
        <div className="d-u-l">
          <dv className="mar">
            <h1>Drop us a Line</h1>
            <div className="border"></div>
          </dv>
        </div>
        <div className="contact">
          <Contacts
            title="VIEW ON MAP"
            para1="RNS Residency, Murudeshwar,"
            para2="Karnataka, 581350"
            link=""
            icon="fa-2x fa-solid fa-location-dot"
          />
          <Contacts
            title="PHONE"
            para1="+91-9325030110"
            para2=""
            link=""
            icon="fa-2x fa-solid fa-mobile"
          />
          <Contacts
            title="EMAIL"
            para1="info@divegoa.com"
            para2=""
            link=""
            icon="fa-2x fa-regular fa-envelope"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
