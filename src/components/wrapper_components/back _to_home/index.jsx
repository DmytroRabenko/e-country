import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import s from'./back_to_home.module.css';

const BackToHome = ({text}) => {
    return(
        <div className={s.toHome}>
        <h4 className={s.title}>{text}</h4>
        <button><Link to='/'>Повернутись в головне меню <FontAwesomeIcon icon={faHouse} /></Link></button>
       
        </div>
    )
}
export default BackToHome;
