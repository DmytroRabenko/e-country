import React from 'react';
import { Link } from 'react-router-dom';
import s from './lang.module.css';

function Lang(){
    return(
        <div className={s.lang}>
                <ul>
                    <li className={s.ukr}>Укр</li>
                    <li>/</li>
                    <Link to="/" className={s.eng}>Eng</Link>
                </ul>
            </div>  
)
}


export default Lang;