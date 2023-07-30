import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderLine1Nav from './nav';
import Lang from './lang';
import Account from './account/account';
import { mobHeaderVisible } from '../../../store/storeSlice';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import s from './headerLine1.module.css';

const HeaderLine1 = () => {
    const isPc = useMediaQuery({ minWidth: 769});
    const dispatch = useDispatch(mobHeaderVisible);
    const changemobHeaderVisible = () => dispatch(mobHeaderVisible());

    return(
    <div className={s.header__line1}>    
        <div className={s.container}>  
            {!isPc &&(
                <button className={s.buttonOpen} onClick={changemobHeaderVisible}><FontAwesomeIcon icon={faBars} /></button>
            )} 
            {isPc &&(
                <>
                <HeaderLine1Nav/>
                 <Lang/>
                </>
            )}
            <Account/>         
        </div>        
    </div>
    )
}

export default HeaderLine1;
