import "../Header/style.scss"
import { useState } from "react";
import data from "../../data"

const Header = () => {

    return (
    <><div className="header">
        <div className="header__nav" id="navigation"> <a href="#navigation">
          <img src="../img/logo1.png" alt=" " /></a><a href="#about">About us</a>
          <a href="#shop">Products</a><a href="/Bin">
            <img href="" src="../img/bin.png" alt="" /><a/></a></div>
        <div className="header__body">
          <h1>The best devices at best prices</h1>

        </div>
      </div>
</>

  );
}

export default Header;