import React from "react";
import * as BiIcons from "react-icons/bi";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";

export const OptionsbarData = [
    {
        title: 'set a conference',
        path: '/home/setConference',
        icon: < FcIcons.FcHeadset /> ,
        cName: 'opt_text'
    },
    {
        title: 'History of conference',
        path: '/home/History',
        icon: < BiIcons.BiHistory /> ,
        cName: 'opt_text'
    },
    {
        title: 'theme',
        path: '/home/theme',
        icon: < IoIcons.IoMdColorPalette /> ,
        cName: 'opt_text'
    },
    {
        title: 'Language',
        path: '/home/language',
        icon: < GrIcons.GrLanguage /> ,
        cName: 'opt_text'
    },
    {
        title: 'Help',
        path: '/home/help',
        icon: < GiIcons.GiHelp /> ,
        cName: 'opt_text'
    },
]