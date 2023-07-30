import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { basketVisible } from '../../../../store/storeSlice';

import ButtonIcon from './buttonIcon';
import s from'./buttonsWrapper.module.css';

const ButtonsWrapper = () => {
    const dispatch = useDispatch(basketVisible);
    const changebasketVisible = () => dispatch(basketVisible());
    const basketCounts = useSelector(state => state.store.basket.length);
    const selectedCounts = useSelector(state => state.store.selected.length);
    const comparedCounts = useSelector(state => state.store.compared.length);


    return(
        <>
        <div className={s.battons__wrapper}>    
            <ButtonIcon count={selectedCounts} link={'./selected'} icon={<FontAwesomeIcon icon={faHeart}/>} tooltipTitle={'Обрані'}/>
            <ButtonIcon count={comparedCounts} link={'./compared'} icon={<FontAwesomeIcon icon={faCodeCompare}/>} tooltipTitle={'Порівняння'}/>
            <ButtonIcon count={basketCounts} icon={<FontAwesomeIcon icon={faCartArrowDown} onClick={changebasketVisible}/>} tooltipTitle={'Кошик'}/>      
        </div>
        </>
    )
}

export default ButtonsWrapper;