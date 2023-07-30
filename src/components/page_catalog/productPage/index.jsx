import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCodeCompare, faPhoneVolume, faCheck} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { addToBasket, addToSelected, addToCompared, formVisible, removeFromBasket, removeFromSelected, removeFromCompared } from '../../../store/storeSlice';
import Rating from '@mui/material/Rating';
import Service from '../../services/service';
import Title from '../../wrapper_components/title'
import Comments from '../../wrapper_components/comments';
import NewProductCommentForm from '../newProductCommentForm';
import NavigationHide from '../../navigation/navigationHide';
import s from './productPage.module.css';  

const ProductPage = () =>{
    const dispatch = useDispatch(addToBasket, addToSelected, addToCompared, formVisible, removeFromBasket, removeFromSelected,  removeFromCompared);
    const[product, setProduct] = useState(null);
    const currentPage = useSelector(state => state.store.currentPage);
    const[selected, setSelected] = useState(false);
    const selectedProducts = useSelector(state => state.store.selected);
    const[compared, setCompared] = useState(false);
    const comparedProducts = useSelector(state => state.store.compared);

    const checking = (data, callback) => {
        for(let x of data){
            if(x.product.id === currentPage.id){
                callback(true);
              } 
        };
    }

    useEffect(() => {
        new Service().getProducts(`catalog?id=${currentPage.id}`)
        .then(product => setProduct(product));
        checking(selectedProducts, setSelected);
        checking(comparedProducts, setCompared);
        // eslint-disable-next-line
    },[selectedProducts, comparedProducts, currentPage.id]);

    return(
        <div className={s.container}>
            <NavigationHide/> 

            <section className={s.product__page}>
            {Array.isArray(product) ? 
            <>
                    <h1>{product[0].type} {product[0].brand} {product[0].model}</h1>

                    <div className={s.rating}>
                        Рейтинг: <Rating className={s.star} name="half-rating-read" value={product[0].rating} precision={0.5} size="small" readOnly /> 
                    </div>

                    <div className={s.code}>Код товару: {product[0].id} </div>

                    <div className={s.main}>
                        <div className={s.left_site}>
                            <div className={s.img_container}>
                                <img src={product[0].img} alt={product[0].model}/>
                            </div>
                            <div className={s.descr}>
                                <p>Характеристики пристрою наведені для ознайомлення. Детальні технічні специфікації уточнюйте у менеджера. Колір вироби на фотографії може відрізнятися від реального. Виробник залишає за собою право вносити зміни в комплектацію, технічне і програмне забезпечення товару без попереднього повідомлення. Магазин не несе відповідальність за зміни, внесені виробником!</p>
                            </div>
                        </div>

                        <div className={s.right_site}>
                            <div>Бренд: <span>{product[0].brand}</span></div>
                            <div>Модель: <span>{product[0].model}</span></div>
                            <div>Гарантія на даний товар: 12 місяців</div>
                            <div>Характеристики: 
                                <p>{product[0].description}</p>  
                            </div>

                            <div className={s.price}>
                                <span>{product[0].price} грн</span> 
                                <Tooltip title="Додати в кошик" placement="top">
                                    <button onClick={() => dispatch(addToBasket(product[0]))} className={s.buy}><FontAwesomeIcon icon={faCartArrowDown} />Купити</button> 
                                </Tooltip>  
                            </div>

                            <div className={s.buttons}>
                                {selected ? 
                                    <Tooltip title="Видалити з обраного" placement="top">
                                        <div className={s.select}>
                                            <button onClick={() => {
                                                dispatch(removeFromSelected(product[0]));
                                                setSelected(false);
                                            }}><FontAwesomeIcon icon={faHeart} />У обране</button> 
                                            <span className={s.count}><FontAwesomeIcon icon={faCheck} /></span>
                                        </div>
                                    </Tooltip> 
                                        
                                :   
                                    <Tooltip title="Додати в обране" placement="top">   
                                        <div className={s.select}>
                                            <button onClick={() => dispatch(addToSelected(product[0]))}><FontAwesomeIcon icon={faHeart} />У обране</button>  
                                        </div>
                                    </Tooltip> 
                                }
                                {compared ? 
                                    <Tooltip title="Видалити з порівняння" placement="top">
                                        <div className={s.compared}>
                                            <button onClick={() => {
                                                dispatch(removeFromCompared(product[0]));
                                                setCompared(false);
                                            }}><FontAwesomeIcon icon={faCodeCompare} />До порівняння</button> 
                                            <span className={s.count}><FontAwesomeIcon icon={faCheck} /></span>
                                        </div>
                                    </Tooltip>
                                :
                                   <Tooltip title="Додати до порівняння" placement="top">
                                        <div className={s.compared}>
                                            <button onClick={() => dispatch(addToCompared(product[0]))}><FontAwesomeIcon icon={faCodeCompare} />До порівняння</button>  
                                        </div>
                                    </Tooltip>
                                }
                                <Tooltip title="Замовити зворотній дзвінок" placement="top">
                                    <button onClick={() => dispatch(formVisible())} className={s.callm}><FontAwesomeIcon icon={faPhoneVolume} />Передзвоніть мені</button> 
                                </Tooltip>
                            </div>
                        </div>
                    </div>         
            </>
            : <CircularProgress/>} 
            <Title text={'Відгуки'}/>
                <div className={s.reviews__container}>
                    <Comments link={`catalog/${currentPage.id}`}/>
                    <NewProductCommentForm link={`catalog/${currentPage.id}`} id={currentPage.id}/>         
                </div> 
            </section>
        </div>     
    )        
}      
    

export default ProductPage;

