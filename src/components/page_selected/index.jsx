import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OpenFormButton from '../wrapper_components/openFormButton';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import Title from '../wrapper_components/title';
import NavigationHide from '../navigation/navigationHide';
import ProductCard from '../page_catalog/productCard';
import { nanoid } from 'nanoid';
import Tooltip from '@mui/material/Tooltip';
import { removeFromSelected } from '../../store/storeSlice';
import BackToHome from '../wrapper_components/back _to_home';
import s from'./selected.module.css';


const Selected = () => {

    const dispatch = useDispatch();
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
                                        <>
                                            <ProductCard  
                                                id={item.product.id} 
                                                category={item.product.category}
                                                img={`${item.product.img}`} 
                                                model={item.product.model} 
                                                brand={item.product.brand} 
                                                description={`${item.product.description}`}
                                                type={`${item.product.type}`} 
                                                price={`${item.product.price}`} 
                                            /> 
                                            <Tooltip title={'видалити'} placement="left">
                                                <button onClick={()=> dispatch(removeFromSelected(item.product))} className={s.delete}><FontAwesomeIcon icon={faXmark} size="xl" /></button>
                                            </Tooltip>
                                        </>
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