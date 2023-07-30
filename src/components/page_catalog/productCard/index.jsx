import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartShopping, faCodeCompare, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import s from './productCard.module.css';
import { useDispatch} from 'react-redux';
import { addToBasket, addToSelected, removeFromSelected, removeFromCompared, addToCompared, updateCurrentPage } from '../../../store/storeSlice';
import { useSelector} from 'react-redux';

const ProductCard = ({id, rating, category, brand, model, img, price, description, type, reviews}) =>{
    const[selected, setSelected] = useState(false);
    const selectedProducts = useSelector(state => state.store.selected);
    const[compared, setCompared] = useState(false);
    const comparedProducts = useSelector(state => state.store.compared);
    const checking = (data, callback) => {
        for(let x of data){
            if(x.product.id === id){
                callback(true);
              } 
        };
    } 
   
    const dispatch = useDispatch(addToBasket, addToSelected, addToCompared, removeFromSelected, removeFromCompared);
    const addProductToBasket = () => dispatch(addToBasket({id, brand, model, img, price, description, category}));
    const addProductToSelected = () => dispatch(addToSelected({id, brand, category, type, model, img, price, description}));
    const addProductToCompared = () => dispatch(addToCompared({id, brand, category, type, model, img, price, description}));

    let brandName = (brand[0].toUpperCase() + brand.slice(1));

    useEffect( () => {
        checking(selectedProducts, setSelected);
        checking(comparedProducts, setCompared);
        // eslint-disable-next-line
    },[selectedProducts, comparedProducts, id])

     return(
            <> 
                <div className={s.product__card} onClick={() => dispatch(updateCurrentPage({id, rating, brand, model, img, price, description, type, reviews, category}))}>
                    <Link to={`/${category}/${brand}/${id}`} className={s.cursor}>
                    <div className={s.photo}>
                        <div><img src={img} alt={model}/></div>  
                    </div>
                        <h5>{brandName} {model}</h5>
                    </Link> 
                    <div className={s.rating}>
                        <span>Рейтинг:</span>
                        <span>{rating}</span>
                        <FontAwesomeIcon icon={faStar} />
                    </div>

                    <div className={s.code}>
                        <span>Код товару:</span>
                        <span>{id}</span>
                    </div>
                    
                    <div className={s.price}>
                        <div>{price}<span>грн</span></div>
                        <Tooltip title="В кошик" placement="top">
                            <button onClick={addProductToBasket} className={s.buy}><FontAwesomeIcon icon={faCartShopping} /></button>
                        </Tooltip>
                    </div>

                    <div className={s.description}>
                        <p>{description}</p>
                    </div>

                    {selected ?
                        <Tooltip title="Видалити з обраного" placement="left">
                            <div className={s.select}>
                                <button onClick={() =>{
                                    dispatch(removeFromSelected({id}));
                                    setSelected(false);
                                }}><FontAwesomeIcon icon={faHeart} /></button>
                                <span className={s.count}><FontAwesomeIcon icon={faCheck} /></span>
                            </div>
                        </Tooltip>
                        :
                        <Tooltip title="У обране" placement="left">
                            <div className={s.select}>
                                <button onClick={addProductToSelected}><FontAwesomeIcon icon={faHeart} /></button>   
                            </div>
                        </Tooltip>
                    }
                    {compared ? 

                        <Tooltip title="Видалити з порівняння" placement="left">
                            <div className={s.compare}>
                                <button onClick={() => {
                                    dispatch(removeFromCompared({id}));
                                    setCompared(false);
                                }}><FontAwesomeIcon icon={faCodeCompare} /></button>
                                <span className={s.count}><FontAwesomeIcon icon={faCheck} /></span>
                            </div>
                        </Tooltip>
                        :
                        <Tooltip title="До порівняння" placement="left">
                            <div className={s.compare}>
                                <button onClick={addProductToCompared}><FontAwesomeIcon icon={faCodeCompare} /></button>
                            </div>
                        </Tooltip>
                    }
                </div>
           
        </>     
    )
}

export default ProductCard;