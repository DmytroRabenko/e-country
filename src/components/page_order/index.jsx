import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../wrapper_components/title';
import NavigationHide from '../navigation/navigationHide';
import PCBasket from '../basket/pcBasket';
import MobBasket from '../basket/mobBasket';
import FormOrder from './formOrder';
import BackToHome from '../wrapper_components/back _to_home';
import s from'./order.module.css';


const Order = () =>{

    const orderProducts = useSelector(state => state.store.basket);

    const products = orderProducts.map((item) => {
       return (
        {id : item.product.id,
        brand : item.product.brand,
        model : item.product.model,
        quantity : item.product.quantity
        }
        )
    })

    let totalValue = null;
    const calcTotalPrice = () => {
        if(orderProducts.length > 0){
            totalValue = orderProducts.map(el => el.product.price * el.product.quantity).reduce((a, b) => a + b).toFixed()
        }
        return totalValue;
    }
    
    calcTotalPrice();
    return(
        <div className={s.container}>
            <NavigationHide/> 
            
            <section className={s.order}>

                {Array.isArray(orderProducts) && orderProducts.length > 0  ? 
                    <>
                    <Title text={'Оформлення замовлення'}/>   
                
                
                    <div className={s.basket_content}>
                        <div className={s.pcBasket}>
                            <PCBasket data={orderProducts} totalValue={totalValue}/>
                        </div>   
                    
                        <div className={s.mobBasket}>
                            <MobBasket data={orderProducts} totalValue={totalValue}/>
                        </div>   
                    </div>
                    <FormOrder products={products} totalValue={totalValue}/>
                    </>
                : 
                    <BackToHome text={'Ваш кошик порожній'}/>   
                } 
                                   
            </section>
        </div>
                
    )
}
export default Order;
