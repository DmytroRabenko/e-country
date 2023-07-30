import React, { useRef }from 'react';
import { useDispatch } from 'react-redux';
import { mobHeaderVisible } from '../../../../store/storeSlice';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../headerLine2/logo'
import Phones from '../../../wrapper_components/phones';
import Lang from '../lang';
import OpenFormButton from '../../../wrapper_components/openFormButton';
import { useClickOutside } from '../../../../hooks';

import s from'./mobNav.module.css';

const MobNav = () => {
    const dispatch = useDispatch(mobHeaderVisible);
    const changemobHeaderVisible = () => dispatch(mobHeaderVisible());

    const navRef = useRef(null);
    useClickOutside(navRef, changemobHeaderVisible);

    document.body.style.overflow = "hidden";
    return( 
        <div className={s.container}>  
            <div className={s.content} ref={navRef}>
                <div onClick={changemobHeaderVisible}>
                    <Logo/>
                </div>
                <nav className={s.header__line1__nav} onClick={changemobHeaderVisible}>
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
                <div className={s.phones}>
                    <h4>Контакти</h4>
                    <Phones/>
                </div>
                <div className={s.form}>
                    <OpenFormButton text={'Зворотній дзвінок'}/>
                    <Lang/>
                </div>

                <button onClick={changemobHeaderVisible} className={s.close}><FontAwesomeIcon icon={faX}/></button>
            </div>
            
        </div>     
    )
}

export default MobNav;
