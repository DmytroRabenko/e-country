import React from 'react';
import { Link } from 'react-router-dom';
import s from'./logo.module.css';


const Logo = () => {
    return(
        <div className={s.logo}>
            <Link to="/"><span>Інтернет магазин з правильними цінами</span></Link>
        </div>
    )
}

export default Logo;