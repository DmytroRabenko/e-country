import React  from 'react';
import Title from '../wrapper_components/title';
import Logo from '../header/headerLine2/logo';
import OpenFormButton from '../wrapper_components/openFormButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import NavigationHide from '../navigation/navigationHide';
import Comments from '../wrapper_components/comments';
import NewCommentForm from '../wrapper_components/newCommentForm';
import s from './about-us.module.css';


const AboutUs = () => {

    return(
        <div className={s.container}>
            <NavigationHide/> 
            
            <section className={s.about_us}>

                <Title text={'Про нас'}></Title>

                <h4>Інтернет магазин Electronics country</h4>

                <div className={s.logo_container}>
                    <Logo/>
                </div>

                    <p>Шановні клієнти, ми завжди раді вітати Вас на сторінках нашого інтернет-магазину!</p>

                <h5>1. У нас "ПРАВИЛЬНІ" ціни.</h5>

                    <p>Мета нашого магазину – поліпшити якість життя наших клієнтів, співробітників і партнерів. Принести у Ваше життя і бізнес мир цифрових технологій. Створити умови для виникнення і впровадження нових ідей.</p>

                <h5>2. Ми допоможемо Вам вибрати.</h5>

                    <p>Якщо Ви зіткнулися з труднощами при виборі товару, Ви можете подзвонити по вказаних на сайті телефонах і отримати професійну консультацію у менеджерів відділу продажів.</p>

                <h5>3. На усі товари надається гарантія.</h5>

                    <p>При здійсненні купівлі в нашому магазині Мобайлпланет, Ви отримуєте повний набір відповідних документів, який дозволить вам вирішити будь-яке питання по гарантійному і післягарантійному обслуговуванню придбаних товарів.</p>
                    <p>Оформлення замовлень на сайті через кошик - <strong>цілодобово, 7 днів в тиждень.</strong></p>
                        
                <h5>Прийом замовлень по телефонах:</h5>

                <table>
                    <tbody>
                        <tr>
                            <td><FontAwesomeIcon icon={faPhone} /></td>
                            <td>Водафон:</td>
                            <td>(095) 999 55 99</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faPhone} /></td>
                            <td>Київстар:</td>
                            <td>(098) 999 55 99</td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon icon={faPhone} /></td>
                            <td>Лайф:</td>
                            <td>(093) 999 55 99</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Замовлення по телефону приймаються:</h5>

                <p>з 9.00 до 18.00 в робочі і вихідні дні.</p>
                <p>Замовлення на сайті через кошик оформляються цілодобово.</p>
                <p>Швидко доставляємо товари по усій Україні. Працюємо з усіма кур'єрськими службами.</p>

                <h5>Подивитися, вибрати товари, отримати замовлення можна в нашому магазині за адресою:</h5>
                <p>м. Одеса, вул. Небесної сотні, 2 (Сіті-центр).</p>

                <OpenFormButton text={'Отримати консультацію'}/>   

                <Title id={'request'} text={'Відгуки про магазин'}/>
                
                <Comments link={'reviews'} />

                <NewCommentForm link={'reviews'}/>

            </section>
        </div>
    )
}
export default AboutUs;

/*
   
*/