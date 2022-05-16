import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { OptionsbarData } from './OptionsbarData';
import { IconContext } from 'react-icons';
import './header.css';

function Header() {
    const [Options, setOptions] = useState(false);

    const showOptions = () => setOptions(!Options);
  return (
      <>
        <IconContext.Provider value={{color: '#064C18'}}>
            <div className="Options">
                <BiIcons.BiUserCircle/>
                <Link to="#" className='options_bars'>
                    <BsIcons.BsThreeDots onClick = { showOptions }/>
                </Link>
            </div>
            <nav className= { Options ? 'opt_menu active' : 'opt_menu'}>
                <ul className='opt_menu_items' onClick = { showOptions }>
                    <li className="options-toogle">
                        <BiIcons.BiUserCircle />
                    </li>
                    {OptionsbarData.map((item, index) => {
                        return (
                            <li key={index} className= {item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span> {item.title} </span>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </nav>
        </IconContext.Provider>
    </>
  )
}

export default Header