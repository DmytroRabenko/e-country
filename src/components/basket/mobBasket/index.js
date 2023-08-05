import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';//видалення з корзини
import { removeFromBasket, minusCount, plusCount, updateCurrentPage} from '../../../store/storeSlice';
import s from'./mobBasket.module.css';

const MobBasket = ({data, totalValue, changebasketVisible}) => {

    const dispatch = useDispatch();

    return(

        <div className={s.basket}>
            <h2><span>Кошик</span></h2>
            {data.map(item => {      
                return(
                                                
                    <div className={s.product} key={item.product.id}>
                                
                        <div className={s.product__img}>
                            <img src={Array.isArray(item.product.img) ? item.product.img[0] : item.product.img} alt='img'/> 
                        </div>
                        <div className={s.info}>
                            <div className={s.product__name} onClick={changebasketVisible}><Link onClick={() => dispatch(updateCurrentPage(item.product))} to={`/${item.product.category}/${item.product.brand}/${item.product.id}`}>{item.product.brand} {item.product.model}</Link></div>

                            <div className={s.bottom}>
                                <div className={s.product__count}>
                                    <button onClick={()=> dispatch(minusCount(item.product))}>-</button>
                                    <span>{item.product.quantity}</span>
                                    <button onClick={()=> dispatch(plusCount(item.product))}>+</button>
                                </div>
                                <div className={s.product__price}>{item.product.price * item.product.quantity} грн</div>                                                               
                            </div>

                        </div>
                        <button className={s.product__delate} onClick={()=> dispatch(removeFromBasket(item.product))}><FontAwesomeIcon icon={faX}/></button>
                    </div> 
            
                )
            })}
            <div className={s.totalValue}>
                Всього <span>{totalValue} грн</span>
            </div>
            <div className={s.basket__footer}>
                <button className={s.button_toContinue} onClick={changebasketVisible}>Продовжити покупки</button>
                <Link to={'/order'} className={s.button_toOrder} onClick={changebasketVisible}> Оформити замовлення</Link>
            </div>
            <button onClick={changebasketVisible} className={s.close}><FontAwesomeIcon icon={faX}/></button>                   
        </div>      
    )
}


export default MobBasket;