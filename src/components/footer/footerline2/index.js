import React from 'react';

import s from './footerline2.module.css';


function Footerline2 (){
    return(
        <div className={s.footerline1__container}>
            <div className={s.footerline2__content}>
                <div className={s.text}>
                    <span>Electronics Country © Інтернет-магазин з правильними цінами  2023</span>
                </div>
                <div className={s.cardslogo}>
                    <span className={s.visa}></span>
                    <span className={s.master}></span>
                </div>
                
            </div>
        </div>
    )
}
export default Footerline2