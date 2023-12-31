import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OpenFormButton from '../wrapper_components/openFormButton';
import Title from '../wrapper_components/title';
import NavigationHide from '../navigation/navigationHide';
import BackToHome from '../wrapper_components/back _to_home';
import { nanoid } from 'nanoid';
import ProductCard from '../page_catalog/productCard';

import s from'./compare.module.css';


const Compared = () =>{
    const comparedProducts = useSelector(state => state.store.compared);
    const[currentCategoryName, setCurrentCategoryName] = useState('phones');
    const productsCurrentCategory = comparedProducts.filter(item => item.product.category === currentCategoryName);
    const categoryNames = Array.from(new Set(comparedProducts.map(item =>  item.product.category )));


    return(
        <div className={s.container}>
            <NavigationHide/> 
            
            <section className={s.compared}>
                <Title text={'Порівняння'}/>

                {Array.isArray(comparedProducts) && comparedProducts.length > 0 &&(

                    <div className={s.category__names}>
                        <span>Категорії:</span>
                        {!!Array.isArray(categoryNames) && (
                            categoryNames.map(item => {
                                return(
                                    <div> 
                                        <input 
                                            key={nanoid()}
                                            className={s.category__name} 
                                            type='button' 
                                            value={item} 
                                            onClick={ () => {
                                                setCurrentCategoryName(item)}}>
                                        </input>
                                    </div>
                                )
                            })
                        )}
                    </div> 

                )}
                <div className={s.compared__cards}>
                        {!!Array.isArray(productsCurrentCategory) && comparedProducts.length > 0 ?
                                
                            productsCurrentCategory.map( item => {
                                   
                                return(
                                    <div className={s.compared__card} key={nanoid()}>
                                             <ProductCard 
                                                id={item.product.id} 
                                                category={item.product.category}
                                                img={`${Array.isArray(item.product.img) ? item.product.img[0] : item.product.img}`} 
                                                model={item.product.model} 
                                                brand={item.product.brand} 
                                                description={`${item.product.description}`}
                                                type={`${item.product.type}`} 
                                                price={`${item.product.price}`} 
                                            /> 
                                    </div>                
                                )
                            })
                                
                                : <BackToHome text={'Обрані товари відсутні'}/>   
                        }
                </div>
                
                <OpenFormButton text={'Отримати консультацію щодо продукту'}/>                    
            </section>
        </div>
    )
}
export default Compared;
