import React from "react";
const Navbar=()=>{
  return (
    <div className="nav">
      <img src="./images/logo.svg" alt="logo" />
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}
export default Navbar
