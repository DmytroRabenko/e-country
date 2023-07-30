import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../wrapper_components/title';
import NavigationHide from '../navigation/navigationHide';
import OpenFormButton from '../wrapper_components/openFormButton';
import Iframe from 'react-iframe'

import  s from './contacts.module.css';

function Contacts (){
    return(
        <div className={s.container}>
            <NavigationHide/> 
            
            <section className={s.contacts}>
                <Title text={'Наші контакти'}></Title>
                <div className={s.contacts__container}>
                    <div>
                        <h3>Контактні телефони:</h3>
                        <ul>
                            <li><Link to="tel:+380959995599" className={s.vodafone}>(095) 9995599</Link></li>
                            <li><Link to="tel:+380989995599" className={s.kyivstar}>(098) 9995599</Link></li>
                            <li><Link to="tel:+380939995599" className={s.life}>(093) 9995599</Link> </li>
                        </ul>   
                    </div>
                    <div>
                        <h3>Завжди на зв'язку:</h3>
                        <ul>
                            <li><a className={s.viber} href="https://www.viber.com/">(095) 9995599</a></li>
                            <li><a className={s.telegram} href="https://telegram.com/">(095) 9995599</a></li>
                            <li><a className={s.instargram} href="https://www.instagram.com/">electronics_country.ukraine</a></li>
                            <li><a className={s.mail} href="mailto:kumarpratiyush1405@gmail.com">electronics_country@ukr.net</a></li>
                        </ul> 
                    </div>
                </div>
                <div className={s.slider}>
                </div>
                
                <div className={s.img__container}>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                   
                </div>

                <div className={s.maps__container}>
                    <h3>Як нас знайти</h3>
                    <Iframe url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21976.022767085215!2d30.723788075505308!3d46.48825607497362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1687868100077!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
                    width="80%"
                    height="100%"
                    display="block"
                    position="relative"/>
                </div>

                <OpenFormButton text={'Отримати консультацію'}/>
            </section>
        </div>
    )
}
export default Contacts
