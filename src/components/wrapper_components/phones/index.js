import React from 'react';
import { Link } from 'react-router-dom';
import s from'./phones.module.css';

const Phones = () => {
   
    return(
        <div className={s.number}>
            <div>
                <Link to="tel:+380959995599" className={s.vodafone}>(095) 9995599</Link>
            </div>
            <div>
                <Link to="tel:+380989995599" className={s.kyivstar}>(098) 9995599</Link>
            </div>
            <div>
                <Link to="tel:+380939995599" className={s.life}>(093) 9995599</Link> 
            </div>
        </div>
    )
}

export default Phones;
