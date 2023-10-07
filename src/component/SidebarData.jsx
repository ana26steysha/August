import React from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaRegRegistered } from "react-icons/fa";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Login",
    path: "/",
    icon: <RiLoginBoxLine />,
    cName: "nav-text",
  },
  {
    title: "Registration",
    path: "/registration",
    icon: <FaRegRegistered />,
    cName: "nav-text",
  },
  {
    title: "Information",
    path: "/information",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
