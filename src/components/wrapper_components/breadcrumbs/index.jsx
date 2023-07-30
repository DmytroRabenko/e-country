import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import useBreadcrumbs from "use-react-router-breadcrumbs" ;

import s from './breadcrumbs.module.css'

const Breadcrumbs = () => {

    const currentPage = useSelector(state => state.store.currentPage);

    const routes = [
        { 
            path : "/:category/:brand/:id", 
            breadcrumb : `${currentPage.model}` , 
        },
        { 
            path : "/" , 
            breadcrumb : `Магазин електроніки` , 
        },
        { 
            path : "/about_us" , 
            breadcrumb : `Про нас` , 
        },
        { 
            path : "/changes" , 
            breadcrumb : `Обмін` , 
        },
        { 
            path : "/rapair" , 
            breadcrumb : `Ремонт` , 
        },
        { 
            path : "/credit" , 
            breadcrumb : `Кредит` , 
        },
        { 
            path : "/contacts" , 
            breadcrumb : `Контакти` , 
        },
        { 
            path : "/compared" , 
            breadcrumb : `Порівняння` , 
        },
        { 
            path : "/selected" , 
            breadcrumb : `Обрані` , 
        },
        { 
            path : "/order" , 
            breadcrumb : `Оформлення замовлення` , 
        },
        { 
            path : "/phones" , 
            breadcrumb : "Мобільні телефони", 
        },
        {
            path : "/laptops" , 
            breadcrumb : "Ноутбуки" , 
        },
        {
            path : "/tv" , 
            breadcrumb : "Телевізори" , 
        },
        {
            path : "/tablets" , 
            breadcrumb : "Планшети" , 
        },
        {
            path : "/pobutova-technica" , 
            breadcrumb : "Побутова техніка" , 
        },
        {
            path : "audio-video-photo" , 
            breadcrumb : "Аудіо Відео Фото техніка" , 
        },
        {
            path : "/org-technica" , 
            breadcrumb : "Орг техніка" , 
        },
        {
            path : "/gadgets-accessories" , 
            breadcrumb : "Гаджети та аксесуари" , 
        },
    ];

    const location = useLocation();
    const breadcrumbs = useBreadcrumbs(routes)

    return(
        <nav className={s.crumbs}>
            {breadcrumbs.map(({ match, breadcrumb }, i) => (
            <Link 
                key={i} 
                to={match.pathname}
                className={match.pathname === location.pathname ? `${s.breadcrumb_active}` : `${s.breadcrumb_not_active}`}
                >   
                {breadcrumb} {match.pathname !== location.pathname ? `/` : ''} 
            </Link>
        ))}
        </nav>  
    )
};

export default Breadcrumbs;

