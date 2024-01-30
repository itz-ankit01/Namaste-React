import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  // Never create useState() outside of any component it will throw error
  // Do not create useState Hook inside any loop, or if else cond, or inside any function, as it creates inconsistency to the code
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render after each click on Login btn");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once) 
  // if dependency array is [btnNameReact] => useEffect is called everytime [btnNameReact] is updated

  useEffect(() => {
    console.log('useEffect Called');
  }, [btnNameReact])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="text-link" to='/'>Home</Link></li>
          <li><Link className="text-link" to='/about'>About Us</Link></li>
          <li><Link className="text-link" to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
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
