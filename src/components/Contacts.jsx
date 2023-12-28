import React from "react";
import "./Contacts.css";
const Contacts = ({ para1, para2, icon, link, title }) => {
  return (
    <div className="contacts">
      <div className="icon">
        <i class={icon}></i>
      </div>
      <a href={link} className="link">
        {title}
      </a>
      <p className="para1">{para1}</p>
      {para2 && <p className="para2">{para2}</p>}
    </div>
  );
};

export default Contacts;
