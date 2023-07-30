import React, { useRef } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import {basketVisible} from '../../store/storeSlice'
import { useClickOutside } from '../../hooks';
import { useMediaQuery } from 'react-responsive';
import PCBasket from './pcBasket';
import MobBasket from '../basket/mobBasket';
import s from'./basket.module.css';

const Basket = () => {
    const isPc = useMediaQuery({ minWidth: 769});

    const basketProducts = useSelector(state => state.store.basket);

    const dispatch = useDispatch(basketVisible);
    const changebasketVisible = () => dispatch(basketVisible());

    const basketRef = useRef(null);
    useClickOutside(basketRef, changebasketVisible);
    
    //total price basket
    let totalValue = null;
    const calcTotalPrice = () => {
        if(basketProducts.length > 0){
            totalValue = basketProducts.map(el => el.product.price * el.product.quantity).reduce((a, b) => a + b).toFixed()
        }
        return totalValue;
    }
    calcTotalPrice();
    document.body.style.overflow = "hidden";
    return(
        <div className={s.basket__container} >

            <div className={s.basket} ref={basketRef}>     

                {basketProducts.length > 0 ? 
                    <div className={s.basket_content}>
                        {isPc &&(
                            <PCBasket data={basketProducts} totalValue={totalValue} changebasketVisible={changebasketVisible} />
                        )}
                        {!isPc &&(
                            <MobBasket data={basketProducts} totalValue={totalValue} changebasketVisible={changebasketVisible} />
                        )}    
                    </div>
                    :
                    <div className={s.basket__message}>
                        <h2><span>Кошик</span></h2>
                        <span>Ваш кошик порожній</span>
                        <button onClick={changebasketVisible} className={s.close}><FontAwesomeIcon icon={faX}/></button>
                    </div>
                }
            </div>
        </div>
    )
}


export default Basket

