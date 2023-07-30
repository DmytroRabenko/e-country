import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../wrapper_components/title'
import Navigation from '../navigation';
import HomeCarousel from './carousel';
import { useMediaQuery } from 'react-responsive';
import Banner from '../wrapper_components/banner';
import MobBanner from '../wrapper_components/mobBanner';
import s from'./home.module.css';


const Home = () => {
    const isPc = useMediaQuery({ minWidth: 769});

    const[mobBannerOpen, setMobBannerOpen] = useState(false);
    const changeOpenBanner = () => {
        setMobBannerOpen(!mobBannerOpen);
    }
    useEffect(() => {
        const timer = setTimeout(changeOpenBanner, 5000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line
      }, []);


    const[bannerOpen, setBannerOpen] = useState(false);
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      if(scroll > 300){setBannerOpen(true)};
      return () => window.removeEventListener("scroll", handleScroll);   
    }, [scroll]);

    return(
        <>
            <div className={s.home__page}>
                {isPc && (
                    <div className={s.navigation}>
                        <Navigation/>
                        {bannerOpen &&(
                        <Banner/>
                        )}
                    </div>
                )}
                <section className={s.content} >
                    <div className={s.carousel}>
                        <HomeCarousel/>
                    </div>
                    <div className={s.recomended} >
                        <div><Link to={'/phones'} className={s.phones_card}><span>Смартфони</span></Link></div>
                        <div><Link to={'/laptops'} className={s.leptops_card}><span>Ноутбуки</span></Link></div>
                        <div><Link to={'/tv'} className={s.tv_card}><span>Телевізори</span></Link></div>
                        <div><Link to={'/phones/apple'} className={s.iphone_card}><span>Iphone</span></Link></div>
                        <div><Link to={'/tablets/apple'} className={s.ipad_card}><span>Ipad</span></Link></div>
                        <div><Link to={'/laptops/apple'} className={s.mackbook_card}><span>Mackbook</span></Link></div>
                    </div>
                </section>
            </div>
            <div className={s.text}>

                <Title text={'Магазин електроніки вільної країни Electronics Country'}/>

                <p className={s.paragraph}>Якщо ви любите сучасні і якісні мобільні пристрої, нові гаджети і стильні аксесуари, то потрапили в правильний магазин. Electronics Country пропонує широкий асортимент смартфонів, планшетів, ноутбуків, телевізорів та інших корисних гаджетів.</p>

                <div className={s.gray}>
                    <p>У каталозі нашого магазину ви знайдете вичерпний асортимент мобільних телефонів та смартфонів, доступних на ринку України на сьогоднішній день. Тільки у нас ви зможете купити <Link to={'/phones'}>телефон</Link> за найкращою ціною зі складу від постачальника.</p>
                </div>

                <p className={s.paragraph}>Найновіші і популярніші моделі з'являються на наших інтернет прилавках практично миттєво після офіційних презентацій.
                Mobile Planet – магазин техніки для кожного.</p>

                <div className={s.gray}>
                    <p>Найновіші і популярніші моделі з'являються на наших інтернет прилавках практично миттєво після офіційних презентацій.</p>
                    <p>Electronics Country – магазин техніки для кожного.</p>
                </div>

                <p className={s.paragraph}>Завдяки прямим контактам з постачальниками електроніки по усій Україні ціни на більшість товарів в нашому каталозі були і залишаються дуже привабливими для наших покупців.</p>

                <div className={s.gray}>
                    <p>Любителям яблучної продукції рекомендуємо відвідати наш розділ техніки Apple, де ви знайдете вичерпний асортимент <Link to={'/phones/apple'}>смартфонів Apple iPhone</Link>, ноутбуків, планшетів, Apple watch, гаджетів та аксесуарів до них. Найпопулярнішою моделлю айфонів на сьогоднішній день є: <Link to={'/phones/apple/5'}>Apple iPhone 14</Link>.
                    </p>

                </div>

                <p className={s.paragraph}><strong>Інтернет-магазин електроніки</strong> Electronics Country працює із замовленнями з усієї України. Зробити покупку ви можете з будь-якого міста. Для доставки вибирайте зручну поштову службу: «Нова пошта», «Укр пошта», «Інтайм». 
                </p>

                <p className={s.paragraph}>Додатковими перевагами нашого <strong>інтернет магазину техніки</strong> являється можливість купівлі в кредит, наявність сервісу по ремонту і програма обміну старого гаджета на новий пристрій.</p>
            </div>

            {(mobBannerOpen && !isPc)&&(
                <MobBanner changeOpenBanner={changeOpenBanner}/>
            )}
        </>
    )
}
export default Home