import React from "react";
import { Link } from "react-router-dom";

function ButtonCheckout() {
  return (
    <Link to={"./checkout"}>
      <button className="w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]">
        Checkout
      </button>
    </Link>
  );
}

export default ButtonCheckout;
