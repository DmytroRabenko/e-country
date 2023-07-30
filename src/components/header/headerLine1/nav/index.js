import React from 'react';
import { NavLink } from 'react-router-dom';

import s from'./headerLine1Nav.module.css'


function HeaderLine1Nav(){
    return(
        <nav className={s.header__line1__nav}>
            <ul> 
                <li className={s.myli}>
                    <NavLink className={s.mylink} to="/about_us">Про нас</NavLink>
                </li>
                <li>
                    <NavLink className={s.mylink} to="/changes">Обмін</NavLink> 
                </li>
                <li>
                    <NavLink className={s.mylink} to="/rapair">Ремонт</NavLink> 
                </li>
                <li>
                    <NavLink className={s.mylink} to="/credit">Кредит</NavLink> 
                </li>
                <li>
                    <NavLink className={s.mylink} to="/contacts">Контакти</NavLink> 
                </li>
            </ul>
        </nav>
)
}

export default HeaderLine1Nav;


