import React from "react";
import "./Header.css";
import ReactSearchBox from "react-search-box";
import * as AiIcons from "react-icons/ai";
function Header() {
  return (
    <div className="topNav-header">
      <div className="topNav-intro">Hello Priya 👋,</div>
      <div className="topNav-search">
        <ReactSearchBox
          leftIcon={
            <span className="search-icon">
              <AiIcons.AiOutlineSearch />
            </span>
          }
          placeholder="Search"
          onChange={(record) => console.log(record)}
        />
      </div>
    </div>
  );
}

export default Header;
