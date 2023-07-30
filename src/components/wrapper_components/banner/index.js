import React from 'react';
import { Link } from 'react-router-dom';
import s from'./banner.module.css';

const Banner = () => {
   
    return(
        <div className={s.banner}>
            <Link to={'/laptops'} className={s.link}>
                <div className={s.content}>  
                   <span>Знижки на ноутбути до - 10%</span>   
                   <span className=''>Встигни придбати</span>
                </div>
            </Link> 
        </div>
    )
}
export default Banner;