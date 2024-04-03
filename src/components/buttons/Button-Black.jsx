import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll/ScrollToTop";

function ButtonBlack({ to, children }) {
  return (
    <Link to={to}>
      <button
        onClick={ScrollToTop}
        className="bg-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px]  hover:bg-[#4C4C4C] transition-colors duration-300"
      >
        {children}
      </button>
    </Link>
  );
}

export default ButtonBlack;
