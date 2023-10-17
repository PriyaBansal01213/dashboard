import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import "../App.css";
import * as IoIcons from "react-icons/io5";
import * as LiaIcons from "react-icons/lia";
import { Avatar } from "@mui/material";
import * as AiIcons from "react-icons/ai";
import * as TbIcons  from "react-icons/tb";
import { profile } from "../assests/images/Images";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (text) => {
    setHoveredItem(text);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <>
      <nav className={"nav-menu active"}>
        <ul className="nav-menu-items">
          <li className="header">
            <TbIcons.TbHexagonLetterD />
            <span className="header-title">Dashboard</span>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                className={item.cName}
                key={index}
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span className="icon-title">{item.title}</span>
                  {hoveredItem !== item.title && (
                    <span className="currentTab">
                      <LiaIcons.LiaGreaterThanSolid />
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
          <li className="navbar-footer">
            <div className="footer-avatar">
              <Avatar
                alt="Remy Sharp"
                src={profile}
                sx={{ width: 30, height: 30 }}
              />
            </div>
            <div className="footer-base">
              <span className="footer-name">Evano</span>
              <div className="footer-status">Project Manager</div>
            </div>
            <span className="footer-downarrow"><AiIcons.AiOutlineDown /></span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
