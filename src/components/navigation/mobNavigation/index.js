import React, { useRef }from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mobNavigationVisible } from '../../../store/storeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import { useClickOutside } from '../../../hooks'

import s from'./mobNavigation.module.css';

const MobNavigation = () => {
    const dispatch = useDispatch(mobNavigationVisible);
    const changeMobNavigationVisible = () => dispatch(mobNavigationVisible());

    const navRef = useRef(null);
    useClickOutside(navRef, changeMobNavigationVisible);

    document.body.style.overflow = "hidden";
    return( 
        <div className={s.container}>  
            <div className={s.content} ref={navRef}>
                <h4>Каталог товару</h4>
                <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><NavLink className={s.link} to="/phones" onClick={changeMobNavigationVisible}><span>Телефони</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/apple' onClick={changeMobNavigationVisible}>Apple</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/samsung' onClick={changeMobNavigationVisible}>Samsung</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/xiomi' onClick={changeMobNavigationVisible}>Xiomi</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/asus' onClick={changeMobNavigationVisible}>Asus</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/lenovo' onClick={changeMobNavigationVisible}>Lenovo</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/onePlus' onClick={changeMobNavigationVisible}>OnePlus</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/phones/realme' onClick={changeMobNavigationVisible}>Realme</NavLink></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><NavLink className={s.link} to="/laptops" onClick={changeMobNavigationVisible}><span>Ноутбуки</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><NavLink to='/laptops/apple' onClick={changeMobNavigationVisible}>Apple</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/laptops/dell' onClick={changeMobNavigationVisible}>Dell</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/laptops/hp' onClick={changeMobNavigationVisible}>HP</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/laptops/asus' onClick={changeMobNavigationVisible}>Asus</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/laptops/lenovo' onClick={changeMobNavigationVisible}>Lenovo</NavLink></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><NavLink className={s.link} to="/tv" onClick={changeMobNavigationVisible}><span>Телевізори</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/samsung' onClick={changeMobNavigationVisible}>Samsung</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/lg' onClick={changeMobNavigationVisible}>Lg</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/xiomi' onClick={changeMobNavigationVisible}>Xiomi</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/kivi' onClick={changeMobNavigationVisible}>Kivi</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/philips' onClick={changeMobNavigationVisible}>Philips</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/hicense' onClick={changeMobNavigationVisible}>Hicense</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tv/sony' onClick={changeMobNavigationVisible}>Sony</NavLink></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> <NavLink className={s.link} to="/tablets" onClick={changeMobNavigationVisible}><span>Планшети</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><NavLink to='/tablets/apple' onClick={changeMobNavigationVisible}>Apple</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tablets/xiomi' onClick={changeMobNavigationVisible}>Xiomi</NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/tablets/samsung' onClick={changeMobNavigationVisible}>Samsung</NavLink></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><NavLink className={s.link} to="/pobutova-technica" onClick={changeMobNavigationVisible}><span>Побутова техніка</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><NavLink to='/pobutova-technica/veluka-pobutova-technika' onClick={changeMobNavigationVisible}><span>Велика побутова техніка</span></NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/pobutova-technica/klimatychna-technika' onClick={changeMobNavigationVisible}><span>Кліматична техніка</span></NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/pobutova-technica/dribna-pobutova-technika' onClick={changeMobNavigationVisible}><span>Дрібна побутова техніка</span></NavLink></li>
                                    <li className={s.submenu_list_item}><NavLink to='/pobutova-technica/technika-dlia-kyhni' onClick={changeMobNavigationVisible}><span>Техніка для кухні</span></NavLink></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><NavLink className={s.link} to="/audio-video-photo" onClick={changeMobNavigationVisible}><span>Аудіо-Відео-Фото</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Аудіо техніка</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Відео техніка</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Фото техніка</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header><NavLink className={s.link} to="/org-technica" onClick={changeMobNavigationVisible}><span>Орг техніка</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>МФУ та принтери</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Сканери</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Ламінатори</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Сканери</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Лічильники банкнот</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Детектори валют</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header><NavLink className={s.link} to="/gadgets-accessories" onClick={changeMobNavigationVisible}><span>Гаджети та аксесуари</span></NavLink></Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.submenu}>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Екшн камери</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Смарт годинники</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Едектро самокати</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Аксесуари до телефонів</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Аксесуари до планшетів</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Аксесуари до ноутбуків</a></li>
                                    <li className={s.submenu_list_item}><a href='/' onClick={changeMobNavigationVisible}>Зарядні станції</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                

                <button onClick={changeMobNavigationVisible} className={s.close}><FontAwesomeIcon icon={faX}/></button>
            </div>
            
        </div>     
    )
}

export default MobNavigation;
