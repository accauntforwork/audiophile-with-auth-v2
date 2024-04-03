import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll/ScrollToTop";

function ButtonTransparent({ to, children }) {
  return (
    <Link to={to}>
      <button
        onClick={ScrollToTop}
        className="bg-transparent uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:bg-pureBlack hover:text-pureWhite outline outline-1 transition-colors duration-300"
      >
        {children}
      </button>
    </Link>
  );
}

export default ButtonTransparent;
