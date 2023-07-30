import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import s from'./back_to_home.module.css';

const BackToHome = ({text}) => {
    return(
        <>
        <h4 className={s.title}>{text}</h4> 
        <Link className={s.toHome} to='/'>Повернутись в головне меню  <FontAwesomeIcon icon={faArrowRight} /> <FontAwesomeIcon icon={faHouse} /></Link>
        </>
    )
}
export default BackToHome;
