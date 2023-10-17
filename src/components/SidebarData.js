import React from "react";
import * as TbIcons from "react-icons/tb";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <TbIcons.TbSquareKey/>,
    cName:'nav-text'
  },
  {
    title: "Product",
    path: "/",
    icon: <IoIcons.IoCubeOutline/>,
    cName:'nav-text'
  },
  {
    title: "Customers",
    path: "/",
    icon: <AiIcons.AiOutlineUser/>,
    cName:'nav-text'
  },
  {
    title: "Income",
    path: "/",
    icon: <IoIcons.IoCubeOutline/>,
    cName:'nav-text'
  },
  {
    title: "Promote",
    path: "/",
    icon: <BiIcons.BiSolidOffer/>,
    cName:'nav-text'
  },
  {
    title: "Help",
    path: "/",
    icon: <MdIcons.MdOutlineLiveHelp/>,
    cName:'nav-text'
  },
];
