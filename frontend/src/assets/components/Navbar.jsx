import React from "react";
import { Link } from "react-router";
import { CiShoppingBasket, CiUser, CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const counter = useSelector((state) => state.basket.items);
  console.log(counter);

  const countNumber = counter.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );
  return (
    <div className="container-custom">
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="wrapper">
          <Link to={"/basket"}>
            <CiShoppingBasket />
            <sup>{countNumber}</sup>
          </Link>

          <Link to={"/admin"}>
            <CiUser />
          </Link>
          <Link to={"/wishlist"}>
            <CiHeart />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
