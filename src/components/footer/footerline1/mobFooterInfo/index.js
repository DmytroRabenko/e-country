import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import s from './mobFooterInfo.module.css';


const MobFooterInfo = () => {
    const [firstBlockVisible, setFirstBlockVisible] = useState(false);
    const [secondBlockVisible, setSecondBlockVisible] = useState(false);
    const [thirdBlockVisible, setThirdBlockVisible] = useState(false);

    const toggleDiv = (value, setValue) => {
        setValue(!value);
    };

    return(
        <>
            <div className={s.container}>
                <div className={s.button} onClick={() => {toggleDiv(firstBlockVisible, setFirstBlockVisible)}}>
                    <span>Про компанію</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {firstBlockVisible &&(
                    <div className={s.menu}>
                        <p>Інтернет-магазин електроніки <strong>Electronics Country</strong> працює із замовленнями по всій Україні</p>
                        <p>Здійснити покупку можна з будь-якого міста. Доставка здійснюється поштовими службами України</p>
                        <p>Перевагами нашого інтернет магазину техніки є: можливість <strong>покупки в кредит</strong>, наявність <strong>сервісу по ремонту</strong> та <strong>програма обміну</strong> старого гаджета на новий пристрій.</p>
                    </div>
                )}
                
            </div>
            
            <div className={s.container}>
                <div className={s.button} onClick={() => {toggleDiv(secondBlockVisible, setSecondBlockVisible)}}>
                    <span>Наші послуги</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {secondBlockVisible && (
                    <div className={s.menu}>
                        <ul className={s.links}>
                            <li><Link to="/changes"><span>Обмін з доплатою</span></Link></li>
                            <li><Link to="/credit"><span>Купівля в кредит</span></Link></li>
                            <li><Link to="/rapair"><span>Ремонт техніки</span></Link></li>
                        </ul>
                    </div>
                )}
                
            </div>

            <div className={s.container}>
                <div className={s.button} onClick={() => {toggleDiv(thirdBlockVisible, setThirdBlockVisible)}}>
                    <span>Контакти</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {thirdBlockVisible && (
                    <div className={s.menu}>
                        <div className={s.section}>
                            <h4>Ми в соцмережах</h4>
                            <div className={s.icon_container}>
                                <a className={s.facebook} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a className={s.youTube} href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a className={s.instagram} href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div> 
                        <div className={s.section}>
                            <h4>Контакти</h4>
                            <ul className={s.contacts}>
                                <li><Link to="tel:+380959995599" className={s.vodafone}>(095) 9995599</Link></li>
                                <li><Link to="tel:+380989995599" className={s.kyivstar}>(098) 9995599</Link></li>
                                <li><Link to="tel:+380939995599" className={s.life}>(093) 9995599</Link> </li>
                                <li><a className={s.viber} href="https://www.viber.com/">(095) 9995599</a></li>
                                <li><a className={s.telegram} href="https://telegram.com/">(095) 9995599</a></li>
                                <li><a className={s.instargram} href="https://www.instagram.com/">electronics_country.ukraine</a></li>
                                <li><a className={s.mail} href="mailto:kumarpratiyush1405@gmail.com">electronics_country@ukr.net</a></li>
                            </ul> 
                        </div>
                        <div className={s.section}>
                            <h4>Графік роботи</h4>
                            <span>Щоденно з 8:00 до 19:00</span>
                        </div>
                    </div>
                )}  
            </div>
        </>
    )
}
export default MobFooterInfo;