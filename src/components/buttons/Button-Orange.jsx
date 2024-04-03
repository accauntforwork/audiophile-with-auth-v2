import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll/ScrollToTop";

function ButtonOrange({ to, children }) {
  return (
    <Link to={to}>
      <button
        className="bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]"
        onClick={ScrollToTop}
      >
        {children}
      </button>
    </Link>
  );
}

export default ButtonOrange;
