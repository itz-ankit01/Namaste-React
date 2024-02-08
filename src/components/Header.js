import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // Never create useState() outside of any component it will throw error
  // Do not create useState Hook inside any loop, or if else cond, or inside any function, as it creates inconsistency to the code
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render after each click on Login btn");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] => useEffect is called everytime [btnNameReact] is updated

  useEffect(() => {
    console.log("useEffect Called");
  }, [btnNameReact]);

  const OnlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-green-200 lg:bg-orange-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4">
            <Link className="text-link" to="/">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link className="text-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="p-4">
            <Link className="text-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="p-4">
            <Link className="text-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="p-4">Cart</li>
          <button
            className="p-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
