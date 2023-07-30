import React from 'react';
import Navigation from '..';
import Breadcrumbs from '../../wrapper_components/breadcrumbs';
import { useMediaQuery } from 'react-responsive';

import s from './navigationHide.module.css';

const NavigationHide = () => {
    const isPc = useMediaQuery({ minWidth: 769});

    return(
        <>
        <div className={s.navigation}>
            {isPc && (
                <Navigation/>
            )}
            <p>Друзi! Працюємо без вихідних. Набирайте контактні номери. Раді допомогти Вам вибрати потрібний гаджет.</p>
        </div>
        <Breadcrumbs/> 
        </>
    )
}
export default NavigationHide;