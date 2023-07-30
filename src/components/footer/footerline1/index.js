import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import s from './footerline1.module.css';


function Footerline1 (){
    return(
            <div className={s.footerline1__container}>
                <div className={s.footerline1__content}>
                <div>
                    <div className={s.left}>
                        <h4>Про компанію</h4>
                        <p>Інтернет-магазин електроніки <strong>Electronics Country</strong> працює із замовленнями по всій Україні</p>
                        <p>Здійснити покупку можна з будь-якого міста. Доставка здійснюється поштовими службами України</p>
                        <p>Перевагами нашого інтернет магазину техніки є: можливість <strong>покупки в кредит</strong>, наявність <strong>сервісу по ремонту</strong> та <strong>програма обміну</strong> старого гаджета на новий пристрій.</p>
                    </div>

                    <div className={s.centr}>
                        <h4>Наші послуги</h4>
                        <ul>
                            <li><Link to="/changes">Обмін з доплатою</Link></li>
                            <li><Link to="/credit">Купівля в кредит</Link></li>
                        <li><Link to="/rapair">Ремонт техніки</Link></li>
                        </ul>

                        <h4>Графік роботи</h4>
                        <span>Щоденно з 8:00 до 19:00</span>

                        <h4>Ми в соцмережах</h4>
                        <div className={s.icon_container}>
                            <a className={s.facebook} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className={s.youTube} href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a className={s.instagram} href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>

                    <div className={s.right}>
                    <h4>Контакти</h4>
                    <ul>
                        <li><Link to="tel:+380959995599" className={s.vodafone}>(095) 9995599</Link></li>
                        <li><Link to="tel:+380989995599" className={s.kyivstar}>(098) 9995599</Link></li>
                        <li><Link to="tel:+380939995599" className={s.life}>(093) 9995599</Link> </li>
                        <li><a className={s.viber} href="https://www.viber.com/">(095) 9995599</a></li>
                        <li><a className={s.telegram} href="https://telegram.com/">(095) 9995599</a></li>
                        <li><a className={s.instargram} href="https://www.instagram.com/">electronics_country.ukraine</a></li>
                        <li><a className={s.mail} href="mailto:kumarpratiyush1405@gmail.com">electronics_country@ukr.net</a></li>
                        </ul> 
                    </div>
                </div>    
                </div>
            </div>
    )
}
export default Footerline1