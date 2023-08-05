import React from 'react';
import { useSelector } from 'react-redux';
import OpenFormButton from '../wrapper_components/openFormButton';
import CircularProgress from '@mui/material/CircularProgress';
import Title from '../wrapper_components/title';
import NavigationHide from '../navigation/navigationHide';
import ProductCard from '../page_catalog/productCard';
import { nanoid } from 'nanoid';
import BackToHome from '../wrapper_components/back _to_home';
import s from'./selected.module.css';


const Selected = () => {
    const selectedProducts = useSelector(state => state.store.selected);

    
    return(
        <div className={s.container}>
           <NavigationHide/> 

            <section className={s.selected}>
                <Title text={'Обрані товари'}/>
                <div className={s.selected__cards}>
                    {Array.isArray(selectedProducts) ?
                        
                        selectedProducts.length > 0 ? 

                        selectedProducts.map((item)=>{
                                return(
                                    <div className={s.selected__card} key={nanoid()}>
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
                            
                    : <CircularProgress /> 
                    }
                </div>

                    <OpenFormButton text={'Отримати консультацію щодо продукту'}/>       
            </section>
        </div>
    )
}
export default Selected;