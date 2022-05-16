import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi"
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: < AiIcons.AiFillHome /> ,
        cName: 'nav_text'
    },
    {
        title: 'List of Conference',
        path: '/List-of-Conference',
        icon: < FaIcons.FaTeamspeak /> ,
        cName: 'nav_text'
    },
    {
        title: 'Settings',
        path: '/Settings',
        icon: < FiIcons.FiSettings /> ,
        cName: 'nav_text'
    },
]