import React from "react";
import "./Icons.css";
const Icons = ({ icon, title, content }) => {
  return (
    <div className="icon">
      <div className="svg">
        <i class={icon}></i>
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Icons;
