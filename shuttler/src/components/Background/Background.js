import React from "react";
import "./Background.css";
import SectionTop from "../../Sections/SectionTop/Page1";
import SectionNav from "../../Sections/SectionNav/SectionNav";

const Background = () => {
  return (
    <div className="Background-component">
      <SectionNav />
      <SectionTop />
    </div>
  );
};
export default Background;
