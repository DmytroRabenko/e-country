import React from 'react';
import { Link } from 'react-router-dom';
import s from'./basketProduct.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';//видалення з корзини
import { removeFromBasket, minusCount, plusCount, updateCurrentPage } from '../../../../store/storeSlice';

const BasketProduct = ({item, changebasketVisible}) => {

    const dispatch = useDispatch();
    console.log(item.product.img)
    return(
  
        <tr className={s.product} key={item.product.id}>
            <td className={s.product__img}><img src={Array.isArray(item.product.img) ? item.product.img[0] : item.product.img} alt='img'/></td>
            <td className={s.product__name} onClick={changebasketVisible}><Link onClick={() => dispatch(updateCurrentPage(item.product))} to={`/${item.product.category}/${item.product.brand}/${item.product.id}`}>{item.product.brand} {item.product.model}</Link></td>
            <td className={s.product__price}>{item.product.price} грн</td>
            <td className={s.product__count}>
                <div>
                    <button onClick={()=> dispatch(minusCount(item.product))}>-</button>
                    <span>{item.product.quantity}</span>
                    <button onClick={()=> dispatch(plusCount(item.product))}>+</button>
                </div>                                                               
            </td>
            <td className={s.product__price}>{item.product.price * item.product.quantity} грн</td>
            <td className={s.product__delate}><button onClick={()=> dispatch(removeFromBasket(item.product))}><FontAwesomeIcon icon={faX}/></button></td>
        </tr>        
    )
}


export default BasketProduct