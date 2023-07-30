import React from 'react';
import Navigation from '../navigation';
import Breadcrumbs from '../wrapper_components/breadcrumbs';
import s from './catalog.module.css';
import Products from './products';

const Catalog = () => {

    return(
        <>
            <div className={s.top__container}>
                <Breadcrumbs/>
            </div>
            
            <div className={s.container}> 
                <div className={s.navigation}>
                    <Navigation/>
                </div>
                <section className={s.content}>
                    <Products/>
                </section>
            </div>
        </>
    ) 
}

export default Catalog;
