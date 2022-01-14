import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { BottomBarData } from './BottomBarData';
import './MobileNav.css';

function MobileNavbar() {
    const[bottomBar] = useState(true)

    return (
        <>
            <div className='mobile-nav'>
                <nav className={bottomBar ? 'nav-menu-mobile active' : 'nav-menu-mobile'}>
                    <ul>
                    {BottomBarData.map((item, index) => {
                      return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                            </Link>
                        </li>
                       )
                    })}
                </ul>

            </nav>
        </div>
    </>
    )
}

export default MobileNavbar
