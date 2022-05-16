import React from 'react'
import { Link } from "react-router-dom";
import Door from './open_door_80px.png';
import Calendar from './calendar_80px.png';
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi';
import './features.css'
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { Zap } from '@styled-icons/octicons';

function features() {
    return ( 
        <div className = "other_side">
            <IconContext.Provider value = {{ color: '#473d3db8', size:'200px'}}>
                <div className = "new_room">
                    <BsIcons.BsPlusSquareDotted />
                    <Link to = "/Home/New-conference" className = "create_room">
                        <span className="tooltiptext"> New conference </span> 
                    </Link> 
                </div>
                <div className = "join_room">
                    <GiIcons.GiExitDoor/>
                    <Link to = "/Home/Join-a-room" className = "join">
                        <span className="tooltiptext"> Join a conference </span> 
                    </Link>
                </div> 
                <div className = "planning_conf">
                    <BsIcons.BsCalendar3/>
                    <Link to = "/Home/Planning-of-conference" className = "plan_conf">
                        <span className="tooltiptext"> Planning of conference </span> 
                    </Link>  
                </div> 
            </IconContext.Provider> 
        </div>
    )
}

export default features