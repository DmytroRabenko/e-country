import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import s from './navigation.module.css';

const Navigation = () => {

    return(
        <div className={s.navigation}>
            <div className={s.button_container}>
                 <button className={s.button}><FontAwesomeIcon icon={faBars} /><span>Каталог товару</span></button>
            </div>

            <div className={s.catalog_container}>
                <ul className={s.catalog}>
                    <li className={s.list_item}>
                        <NavLink to="/phones"><span>Телефони</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><NavLink to='/phones/apple'>Apple</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/phones/samsung'>Samsung</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/phones/xiomi'>Xiomi</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/phones/asus'>Asus</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/phones/lenovo'>Lenovo</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/phones/onePlus'>OnePlus</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/phones/realme'>Realme</NavLink></li>   
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/laptops"><span>Ноутбуки</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><NavLink to='/laptops/apple'>Apple</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/laptops/dell'>Dell</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/laptops/hp'>HP</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/laptops/asus'>Asus</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/laptops/lenovo'>Lenovo</NavLink></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/tv"><span>Телевізори</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><NavLink to='/tv/samsung'>Samsung</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tv/lg'>Lg</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tv/xiomi'>Xiomi</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tv/kivi'>Kivi</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tv/philips'>Philips</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tv/hicense'>Hicense</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tv/sony'>Sony</NavLink></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/tablets"><span>Планшети</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><NavLink to='/tablets/apple'>Apple</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tablets/xiomi'>Xiomi</NavLink></li>
                            <li className={s.submenu_list_item}><NavLink to='/tablets/samsung'>Samsung</NavLink></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/pobutova-technica"><span>Побутова техніка</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}>
                                <NavLink to='/pobutova-technica/veluka-pobutova-technika'><span>Велика побутова техніка</span><FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                <ul className={s.submenu2}>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/veluka-pobutova-technika'>Холодильники</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/veluka-pobutova-technika'>Морозильні камери</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/veluka-pobutova-technika'>Пральні машини</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/veluka-pobutova-technika'>Посудомийні машини</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/veluka-pobutova-technika'>Вся велика техніка</a></li>
                                </ul>
                            </li>
                            <li className={s.submenu_list_item}>
                            <NavLink to='/pobutova-technica/klimatychna-technika'><span>Кліматична техніка</span><FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                <ul className={s.submenu2}>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Бойлери</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Вентилятори</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Обігрівачі</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Кондиціонери</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Зволожувачі повітря</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Опалювальні котли</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Кондиціонери</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Вся кліматична техніка</a></li>
                                </ul>
                            </li>
                            <li className={s.submenu_list_item}>
                            <NavLink to='/pobutova-technica/dribna-pobutova-technika'><span>Дрібна побутова техніка</span><FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                <ul className={s.submenu2}>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Праски</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Прилади для укладання волосся</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Пилососи</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Електробритви</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Пароочисники</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Краса та догляд</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/klimatychna-technika'>Вся дрібна техніка</a></li>
                                </ul>
                                </li>
                            <li className={s.submenu_list_item}>
                            <NavLink to='/pobutova-technica/technika-dlia-kyhni'><span>Техніка для кухні</span><FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                <ul className={s.submenu2}>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Блендери</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Кавоварки</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Кавомолки</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Кухонні комбаїни</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Мікрохвильові печі</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Тостери</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>М'ясорубки</a></li>
                                    <li className={s.submenu_list_item}><a href='/pobutova-technica/technika-dlia-kyhni'>Вся техніка для кухні</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/audio-video-photo"><span>Аудіо-Відео-Фото техніка</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><a href='/audio-video-photo'>Аудіо техніка</a></li>
                            <li className={s.submenu_list_item}><a href='/audio-video-photo'>Відео техніка</a></li>
                            <li className={s.submenu_list_item}><a href='/audio-video-photo'>Фото техніка</a></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/org-technica"><span>Орг техніка</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><a href='/org-technica'>МФУ та принтери</a></li>
                            <li className={s.submenu_list_item}><a href='/org-technica'>Сканери</a></li>
                            <li className={s.submenu_list_item}><a href='/org-technica'>Ламінатори</a></li>
                            <li className={s.submenu_list_item}><a href='/org-technica'>Сканери</a></li>
                            <li className={s.submenu_list_item}><a href='/org-technica'>Лічильники банкнот</a></li>
                            <li className={s.submenu_list_item}><a href='/org-technica'>Детектори валют</a></li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <NavLink to="/gadgets-accessories"><span>Гаджети та аксесуари</span> <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                        <ul className={s.submenu}>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Екшн камери</a></li>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Смарт годинники</a></li>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Едектро самокати</a></li>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Аксесуари до телефонів</a></li>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Аксесуари до планшетів</a></li>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Аксесуари до ноутбуків</a></li>
                            <li className={s.submenu_list_item}><a href='/gadgets-accessories'>Зарядні станції</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation;