import React from 'react'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faTrash } from '@fortawesome/free-solid-svg-icons'
import BasketProduct from './basketProduct';
import s from'./pcBasket.module.css';


const PCBasket = ({data, totalValue, changebasketVisible}) => {
    return(
        <div className={s.basket}>
            <h2>Кошик</h2>
            <table>
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th className={s.product__name}></th>
                        <th className={s.product__price}>Ціна</th>
                        <th className={s.product__count}>Кількість</th>
                        <th className={s.product__price}>Сума</th>
                        <th className={s.product__delate}><FontAwesomeIcon icon={faTrash} /></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {   
                        return(
                            <BasketProduct key={item.product.id} item={item} changebasketVisible={changebasketVisible}/> 
                        )
                    })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}></td>
                        <td>Всього:</td>
                        <td className={s.product__price}>{totalValue} грн</td>
                    </tr>
                </tfoot>
                </table>
                <div className={s.basket__footer}>
                    <button className={s.button_toContinue} onClick={changebasketVisible}>Продовжити покупки</button>
                    <Link to={'/order'} className={s.button_toOrder} onClick={changebasketVisible}> Оформити замовлення</Link>
                    </div>
                <button onClick={changebasketVisible} className={s.close}><FontAwesomeIcon icon={faX}/></button>                   
        </div>
    )
}


export default PCBasket;

