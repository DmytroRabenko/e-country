import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';

import s from'./mobBanner.module.css';

const MobBanner = ({changeOpenBanner}) => {
   
    return(
        <div className={s.mob_banner}>
            <Link to={'/laptops'} className={s.link}>
                <div className={s.content}>  
                   <span>Знижки на ноутбути до - 10%</span>   
                   <span className=''>Встигни придбати</span>
                </div>
            </Link>
            <button onClick={changeOpenBanner} className={s.close}><FontAwesomeIcon icon={faX}/></button> 
        </div>
    )
}
export default MobBanner;