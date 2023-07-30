import React from 'react';
import Navigation from '..';
import Breadcrumbs from '../../wrapper_components/breadcrumbs';

import s from './navigationHide.module.css';

const NavigationHide = () => {

    return(
        <>
        <div className={s.navigation}>
            <Navigation/>
            <p>Друзi! Працюємо без вихідних. Набирайте контактні номери. Раді допомогти Вам вибрати потрібний гаджет.</p>
        </div>
        <Breadcrumbs/> 
        </>
    )
}
export default NavigationHide;